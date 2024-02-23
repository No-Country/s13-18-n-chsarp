using Api.Domain.Dto;
using Api.Domain.Interfaces.Bll;
using Api.Domain.Interfaces.Dal;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace Api.Bll
{
    public class ConnectionUserService : IConnectionUserService
    {
        private readonly IConnectionUserRepository _connectionUserRepository;
        private readonly IMapper _mapper;
        public ConnectionUserService(IConnectionUserRepository connectionUserRepository, IMapper mapper)
        {
            _connectionUserRepository = connectionUserRepository;
            _mapper = mapper;
        }
        public async Task<bool> Create(ConnectionUserDTO connUser)
        {
            return await _connectionUserRepository.Create(connUser);
        }

        public async Task<bool> Delete(string connUserId)
        {
            return await _connectionUserRepository.Delete(connUserId);
        }

        public async Task<IEnumerable<ConnectionUserDTO>> GetAllBySessionId(int id)
        {
            try
            {
            var query = await _connectionUserRepository.GetAll();
            var list = await query.Where(c => c.SessionId == id).ToListAsync();
            return _mapper.Map<IEnumerable<ConnectionUserDTO>>(list);
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}
