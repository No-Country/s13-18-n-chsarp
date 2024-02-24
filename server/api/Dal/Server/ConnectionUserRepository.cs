using Api.Domain.Dto;
using Api.Domain.Entities;
using Api.Domain.Interfaces.Dal;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace Api.Dal.Server
{
    public class ConnectionUserRepository : IConnectionUserRepository
    {
        private readonly Context _context;
        private readonly IMapper _mapper;
        public ConnectionUserRepository(Context context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<bool> Create(ConnectionUserDTO connUser)
        {
            try
            {

                var conn = _mapper.Map<ConnectionUser>(connUser);
                _context.Add(conn);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<bool> Delete(string connUserId)
        {
            try
            {
                var conn = await _context.ConnectionUsers
                    .Where(c => c.ConnectionId == connUserId)
                    .FirstOrDefaultAsync();
                if (conn == null) return false;
                _context.Remove(conn);
                await _context.SaveChangesAsync();
                return true;
            }
            catch { return false; }
        }

        public async Task<IQueryable<ConnectionUser>> GetAll()
        {
            try
            {
                IQueryable<ConnectionUser> query = _context.ConnectionUsers;
                return query;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
