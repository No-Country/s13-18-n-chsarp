using Api.Domain.ViewModels.Server;

namespace Api.Domain.Interfaces.Dal
{
    public interface IMessageRepository
    {
        Task<MessageVModel> Create(MessageVModel newMessage);

        Task<MessageVModel> Moderate(int id);

        Task<IQueryable<MessageVModel>> GetAllBySession(int id);
    }
}
