﻿using Api.Domain.Entities;
using Api.Domain.Interfaces.Dal;
using Api.Domain.ViewModels.Server;

namespace Api.Dal.Server
{
    public class MessageRepository : IMessageRepository
    {
        private readonly Context _context;
        public MessageRepository(Context context)
        {
            _context = context;
        }

        public async Task<MessageVModel> Create(MessageVModel newMessage)
        {
            try
            {

                // To Do lógica profesional y autogenerated
                var message = new Message()
                {
                    Id = 0,
                    UserName = newMessage.UserName,
                    SessionId = newMessage.SessionId,
                    Date = DateTime.Now,
                    Text = newMessage.Text,
                    IsModerated = false,
                    IsProfessional = false,
                    IsAutoGenerated = false
                };
                _context.Add(message);
                await _context.SaveChangesAsync();

                newMessage.Date = message.Date;
                return newMessage;
            }
            catch (Exception ex)
            {
                throw;
            }

        }

        public Task<IQueryable<MessageVModel>> GetAllBySession(int id)
        {
            throw new NotImplementedException();
        }

        public Task<MessageVModel> Moderate(int id)
        {
            throw new NotImplementedException();
        }
    }
}
