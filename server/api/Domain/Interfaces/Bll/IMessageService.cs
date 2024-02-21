using Api.Domain.ViewModels.Server;

namespace Api.Domain.Interfaces.Bll
{
    public interface IMessageService
    {
        Task<MessageVModel> Create(MessageVModel newMessage);

        Task<MessageVModel> Moderate(int id);

        Task<IQueryable<MessageVModel>> GetAllBySession(int id);
    }
}
