using Api.Domain.ViewModels.Server;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssessmentController : ControllerBase
    {
        [HttpGet("{id:int}")]
        public async Task<ActionResult<IEnumerable<AssessmentResponse>>> GetAllById()
        {
            return Ok(new List<AssessmentResponse>());
        }

        [HttpPost("{idProfessional:int}/member/{idMember:int}")]
        public async Task<ActionResult> RegisterTopic([FromBody] AssessmentRequest request)
        {
            return Ok();
        }
    }
}
