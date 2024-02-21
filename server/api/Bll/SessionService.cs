﻿using Api.Domain.HubModels;
using Api.Domain.Interfaces.Bll;
using Api.Domain.Interfaces.Dal;
using Api.Domain.ViewModels.Server;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace Api.Bll
{
    public class SessionService : ISessionService
    {
        private readonly ISessionRepository _sessionRepository;
        private readonly IMessageRepository _messageRepository;
        private readonly IMapper _mapper;
        public SessionService(ISessionRepository sessionRepository, IMessageRepository messageRepository, IMapper mapper)
        {
            _sessionRepository = sessionRepository;
            _messageRepository = messageRepository;
            _mapper = mapper;
        }

        public async Task<SessionResponse> CreateSession(SessionRequest session)
        {
            var newsession = await _sessionRepository.Create(session);
            var msg = new MessageVModel()
            {
                SessionId = newsession.Id,
                UserName = "ADMIN",
                Date = DateTime.Now,
                Text = $"Sesión {session.Name} creada por {session.ModeratorName}",
                Moderated = false,
                Professional = true,
                Autogenerated = true
            };
            await _messageRepository.Create(msg);
            return newsession;
        }

        public Task<bool> DeleteSession(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<SessionResponse>> GetAllSessions()
        {
            try
            {
                var query = await _sessionRepository.GetAll();
                var sessions = await query
                    .Where(s => s.State != Domain.Enums.CHANNEL_STATE.FINISHED)
                    .ToListAsync();
                return _mapper.Map<IEnumerable<SessionResponse>>(sessions);
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<SessionResponse> GetSessionById(int id)
        {
            return await _sessionRepository.GetById(id);
        }

        public Task<SessionResponse> UpdateSession(int id, SessionRequest updateSession)
        {
            throw new NotImplementedException();
        }
    }
}
