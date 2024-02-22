using Api.Domain.ViewModels.Server;

namespace Api.Domain.Interfaces.Bll
{
    public interface ISessionService
    {
        Task<SessionResponse> CreateSession(SessionRequest session);

        Task<SessionResponse> UpdateSession(int id, SessionRequest updateSession);

        Task<bool> DeleteSession(int id);

        Task<SessionResponse> GetSessionById(int id);

        Task<IEnumerable<SessionResponse>> GetAllSessions();
    }
}
