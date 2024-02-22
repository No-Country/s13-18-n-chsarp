using Api.Domain.Interfaces.Bll;
using Api.Domain.Interfaces.Dal;
using Api.Domain.ViewModels.Server;

namespace Api.Bll
{
    public class MessageService : IMessageService
    {
        private readonly IMessageRepository _messageRepository;
        public MessageService(IMessageRepository messageRepository)
        {
            _messageRepository = messageRepository;
        }
        public async Task<MessageVModel> Create(MessageVModel newMessage)
        {
            return await _messageRepository.Create(newMessage);
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
