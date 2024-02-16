using Api.Domain.ViewModels.Server;
using Azure;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChannelsController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ChannelResponse>>> GetAll()
        {
            return Ok(new List<ChannelResponse>());
        }

        [HttpPost]
        public async Task<ActionResult> RegisterChannel([FromBody] ChannelRequest request)
        {
            return Ok();
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<ChannelResponse>> Get(int id)
        {
            return Ok(new ChannelResponse());
        }

        [HttpPatch("{id:int}")]
        public async Task<ActionResult<ChannelResponse>> Patch(int id, [FromBody] JsonPatchDocument patchDoc)
        {
            return Ok(new ChannelResponse());
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            return Ok();
        }

        [HttpGet("{id:int}/start")]
        public async Task<ActionResult<string>> Start(int id)
        {
            return Ok("Canal iniciado");
        }

        [HttpGet("{id:int}/close")]
        public async Task<ActionResult<string>> Close(int id)
        {
            return Ok("Canal cerrado");
        }

        [HttpGet("{id:int}/announcement")]
        public async Task<ActionResult<string>> Announcement(int id)
        {
            return Ok("Anuncio");
        }

        [HttpGet("{id:int}/members/{idMember:int}/leave")]
        public async Task<ActionResult<string>> Leave(int id, int idMember)
        {
            return Ok("Salida");
        }
    }
}
