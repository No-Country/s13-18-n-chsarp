using Api.Domain.Entities;
using Api.Domain.ViewModels.Server;

namespace Api.Domain.Interfaces.Dal
{
    public interface ISessionRepository
    {
        Task<SessionResponse> Create(SessionRequest newSession, string name, Guid id);

        Task<SessionResponse> Update(int id, SessionRequest updateSession);

        Task<bool> Close(int id);

        Task<SessionResponse> GetById(int id);

        Task<IQueryable<Session>> GetAll();
    }
}
