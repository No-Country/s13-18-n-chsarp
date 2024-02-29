using Api.Domain.Entities;
using Api.Domain.Interfaces.Bll;
using Api.Domain.ViewModels.Server;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
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

        [Authorize(Roles = Role.Moderator)]
        [HttpPost]
        public async Task<ActionResult> RegisterSession([FromBody] SessionRequest request)
        {
            var name = HttpContext.User.Claims.Where(c => c.Type == "Name").FirstOrDefault().Value;
            var id = HttpContext.User.Claims.Where(c => c.Type == "Id").FirstOrDefault().Value;
            var guidId = new Guid(id);
            var session = await _sessionService.CreateSession(request, name, guidId);
            return Created();
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
