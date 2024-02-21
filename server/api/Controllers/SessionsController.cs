using Api.Domain.Interfaces.Bll;
using Api.Domain.ViewModels.Server;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SessionsController : ControllerBase
    {
        private readonly ISessionService _sessionService;
        public SessionsController(ISessionService sessionService)
        {
            _sessionService = sessionService;
        }

        [HttpPost]
        public async Task<ActionResult> RegisterSession([FromBody] SessionRequest request)
        {
            var session = await _sessionService.CreateSession(request);
            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<SessionResponse>>> GetAllSessions()
        {
            var sessions = await _sessionService.GetAllSessions();
            return Ok(sessions);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<SessionResponse>> GetById(int id)
        {
            var session = await _sessionService.GetSessionById(id);
            if (session == null) return NotFound();
            return Ok(session);
        }
    }
}
