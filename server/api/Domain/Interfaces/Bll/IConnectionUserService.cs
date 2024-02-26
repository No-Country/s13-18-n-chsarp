using Api.Domain.Dto;

namespace Api.Domain.Interfaces.Bll
{
    public interface IConnectionUserService
    {
        Task<bool> Create(ConnectionUserDTO connUser);

        Task<bool> Delete(string connUserId);

        Task<IEnumerable<ConnectionUserDTO>> GetAllBySessionId(int id);
    }
}
