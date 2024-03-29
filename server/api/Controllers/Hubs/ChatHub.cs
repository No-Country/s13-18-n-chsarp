﻿using Api.Domain.Dto;
using Api.Domain.Entities;
using Api.Domain.HubModels;
using Api.Domain.Interfaces.Bll;
using Api.Domain.ViewModels.Server;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;

namespace Api.Controllers.Hubs
{
    [Authorize]
    public class ChatHub : Hub
    {
        private readonly SharedDB _shared;
        private readonly IMessageService _messageService;
        private readonly IConnectionUserService _connectionUserService;
        private readonly ISessionService _sessionService;
        public ChatHub(SharedDB shared, IMessageService messageService, IConnectionUserService connectionUserService, ISessionService sessionService)
        {
            _shared = shared;
            _messageService = messageService;
            _connectionUserService = connectionUserService;
            _sessionService = sessionService;
        }
        public async Task<string> SendMessage(string message)
        {
            var name = Context.GetHttpContext().User.Claims.Where(c => c.Type == "Name").FirstOrDefault().Value;
            if (_shared.connections.TryGetValue(Context.ConnectionId, out UserConnection connection))
            {
                await Clients.Group(connection.ChatRoom)
                    .SendAsync("ReceiveSpecificMessage", name, message);
                var msg = new MessageVModel()
                {
                    SessionId = connection.SessionId,
                    UserName = name,
                    Date = DateTime.Now,
                    Text = message,
                    IsModerated = false,
                    IsProfessional = false,
                    IsAutogenerated = false
                };
                await _messageService.Create(msg);
                return "Sended";
            }
            return "Disconnected";
        }

        public async Task JoinSpecificChatRoom(UserConnection connection)
        {
            var name = Context.GetHttpContext().User.Claims.Where(c => c.Type == "Name").FirstOrDefault().Value;
            try
            {
                await Groups.AddToGroupAsync(Context.ConnectionId, connection.ChatRoom);
                _shared.connections[Context.ConnectionId] = connection;
                await Clients.Group(connection.ChatRoom)
                    .SendAsync("JoinSpecificChatRoom", "ADMIN", $"{name} se unió a la sala: {connection.ChatRoom}");
                var msg = new MessageVModel()
                {
                    SessionId = connection.SessionId,
                    UserName = "ADMIN",
                    Date = DateTime.Now,
                    Text = $"{name} se unió a la sala: {connection.ChatRoom}",
                    IsModerated = false,
                    IsProfessional = false,
                    IsAutogenerated = true
                };
                await _messageService.Create(msg);

                var connUser = new ConnectionUserDTO()
                {
                    SessionId = connection.SessionId,
                    UserName = name,
                    ConnectionId = Context.ConnectionId
                };
                await _connectionUserService.Create(connUser);
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task LeaveChatRoom(UserConnection connection)
        {
            var name = Context.GetHttpContext().User.Claims.Where(c => c.Type == "Name").FirstOrDefault().Value;
            try
            {
                await Clients.Group(connection.ChatRoom)
                    .SendAsync("ReceiveSpecificMessage", "ADMIN", $"{name} salió de la sala: {connection.ChatRoom}");
                await Groups.RemoveFromGroupAsync(Context.ConnectionId, connection.ChatRoom);
                var msg = new MessageVModel()
                {
                    SessionId = connection.SessionId,
                    UserName = "ADMIN",
                    Date = DateTime.Now,
                    Text = $"{name} salió de la sala: {connection.ChatRoom}",
                    IsModerated = false,
                    IsProfessional = false,
                    IsAutogenerated = true
                };
                await _messageService.Create(msg);
                await _connectionUserService.Delete(Context.ConnectionId);
                _shared.connections.Remove(Context.ConnectionId, out UserConnection connection1);
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<string> CloseChatRoom(UserConnection connection)
        {
            var name = Context.GetHttpContext().User.Claims.Where(c => c.Type == "Name").FirstOrDefault().Value;
            var IdModeratorJWT = Context.GetHttpContext().User.Claims.Where(c => c.Type == "Id").FirstOrDefault().Value;
            var session = await _sessionService.GetSessionById(connection.SessionId);
            try
            {
                if (session.ModeratorId.ToString() != IdModeratorJWT) return "Not mod";
                await Clients.Group(connection.ChatRoom)
                    .SendAsync("ReceiveSpecificMessage", "ADMIN", $"{name} cerró la sesión de la sala: {connection.ChatRoom}");
                await Clients.Group(connection.ChatRoom)
                    .SendAsync("CloseChat");
                var users = await _connectionUserService.GetAllBySessionId(connection.SessionId);
                if (users != null)
                {
                    foreach (var user in users)
                    {
                        await Groups.RemoveFromGroupAsync(user.ConnectionId, connection.ChatRoom);
                        await _connectionUserService.Delete(user.ConnectionId);
                        _shared.connections.Remove(user.ConnectionId, out UserConnection connection1);
                    }
                }
                var msg = new MessageVModel()
                {
                    SessionId = connection.SessionId,
                    UserName = "ADMIN",
                    Date = DateTime.Now,
                    Text = $"{name} cerró la sesión de la sala: {connection.ChatRoom}",
                    IsModerated = false,
                    IsProfessional = false,
                    IsAutogenerated = true
                };
                await _messageService.Create(msg);
                await _sessionService.CloseSession(connection.SessionId);
                return "Ok";
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}
