using Api.Domain.ViewModels.Server;
using Azure;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TopicController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TopicResponse>>> GetAll()
        {
            return Ok(new List<TopicResponse>());
        }

        [HttpPost]
        public async Task<ActionResult> RegisterTopic([FromBody] TopicRequest request)
        {
            return Ok();
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<TopicResponse>> Get(int id)
        {
            return Ok(new TopicResponse());
        }

        [HttpPatch("{id:int}")]
        public async Task<ActionResult<TopicResponse>> Patch(int id, [FromBody] JsonPatchDocument patchDoc)
        {
            return Ok(new TopicResponse());
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            return Ok();
        }
    }
}
