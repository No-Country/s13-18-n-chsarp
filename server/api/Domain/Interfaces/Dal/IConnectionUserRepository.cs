using Api.Domain.Dto;
using Api.Domain.Entities;

namespace Api.Domain.Interfaces.Dal
{
    public interface IConnectionUserRepository
    {
        Task<bool> Create(ConnectionUserDTO connUser);

        Task<bool> Delete(string connUserId);

        Task<IQueryable<ConnectionUser>> GetAll();
    }
}
