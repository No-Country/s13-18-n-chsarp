using Api.Domain.Dto;
using Api.Domain.ViewModels.Server;
using Azure;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TopicsController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TopicVModel>>> GetAll()
        {
            return Ok(new List<TopicVModel>());
        }

        [HttpPost]
        public async Task<ActionResult<TopicVModel>> RegisterTopic([FromBody] TopicVModel request)
        {
            return CreatedAtAction("Get", new { id = request.Name }, new TopicVModel());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TopicVModel>> Get(string id)
        {
            return Ok(new TopicVModel());
        }

        [HttpPatch("{id}")]
        public async Task<ActionResult<TopicVModel>> Patch(string id, [FromBody] TopicPatch patchDoc)
        {
            return Ok(new TopicVModel());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            return NoContent();
        }
    }
}
