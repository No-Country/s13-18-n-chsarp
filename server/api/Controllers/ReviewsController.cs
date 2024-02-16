using Api.Domain.ViewModels.Server;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/mentor/{id:int}/[controller]")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        [HttpGet()]
        public async Task<ActionResult<ReviewSummaryResponse>> GetAllById(int id)
        {
            return Ok(new List<ReviewSummaryResponse>());
        }

        [HttpPost()]
        public async Task<ActionResult> RegisterTopic([FromBody] ReviewRequest request)
        {
            return Created();
        }
    }
}
