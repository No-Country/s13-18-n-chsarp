using Api.Domain.Entities;
using Api.Domain.Enums.Channel;
using Api.Domain.Interfaces.Dal;
using Api.Domain.ViewModels.Server;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace Api.Dal.Server
{
    public class SessionRepository : ISessionRepository
    {
        private readonly Context _context;
        private readonly IMapper _mapper;
        public SessionRepository(Context context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<SessionResponse> Create(SessionRequest newSession, string name)
        {
            try
            {
                TimeSpan? dur = (newSession.Close_Date != null && newSession.Init_Date != null) 
                    ? (newSession.Close_Date - newSession.Init_Date) 
                    : null;
                var session = new Session()
                {
                    Id=0,
                    ChannelId = newSession.ChannelId,
                    Name = newSession.Name,
                    Messages = new List<Message>(),
                    ModeratorName = name,
                    Created_Date = DateTime.Now,
                    Init_Date = newSession.Init_Date,
                    Close_Date = newSession.Close_Date,
                    Duration = dur,
                    State = CHANNEL_STATE.PROPOSED,
                    Type = CHANNEL_TYPE.CHAT
                };
                _context.Add(session);
                await _context.SaveChangesAsync();

                return new SessionResponse()
                {
                    Id = session.Id,
                    ChannelId = session.ChannelId,
                    Messages = new List<MessageVModel>(),
                    ModeratorName =session.ModeratorName,
                    Created_Date = session.Created_Date,
                    Init_Date = session.Init_Date,
                    Duration = session.Duration,
                    State = session.State,
                    Type = session.Type    
                };
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<bool> Close(int id)
        {
            try
            {
                var session = await _context.Sessions.Where(s => s.Id == id).FirstOrDefaultAsync();
                if (session != null)
                {
                    session.State = CHANNEL_STATE.FINISHED;
                    _context.Update(session);
                    await _context.SaveChangesAsync();
                    return true;
                }
                return false;
            }
            catch { return false; }
        }

        public async Task<IQueryable<Session>> GetAll()
        {
            try
            {
                IQueryable<Session> querySession = _context.Sessions;
                return querySession;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<SessionResponse> GetById(int id)
        {
            try
            {
                var session = await _context.Sessions
                    .Where(s => s.Id == id)
                    .Where(s => s.State != CHANNEL_STATE.FINISHED)
                    .Include(s => s.Messages)
                    .FirstOrDefaultAsync();
                return _mapper.Map<SessionResponse>(session);
            }
            catch(Exception ex)
            {
                throw;
            }
        }

        public Task<SessionResponse> Update(int id, SessionRequest updateSession)
        {
            throw new NotImplementedException();
        }
    }
}
