using Api.Bll;
using Api.Domain.Entities;
using Api.Domain.ViewModels.Server;
using Azure;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChannelsController (ChannelService _service) : ControllerBase
    {
        [HttpPost]
        //[Authorize(Roles=Role.Moderator)]
        [ProducesResponseType(typeof(ChannelCreatedResponse), StatusCodes.Status201Created)]
        public async Task<ActionResult<ChannelCreatedResponse>> RegisterChannel([FromBody] ChannelRequest request)
        {
            //Empty cuando no viene autentiado para debug
            var user = HttpContext.User.FindFirst("mail")?.Value??String.Empty;
            var result  = await _service.CreateChannelAsync(request,user);
            return  result
                .Result?CreatedAtAction(nameof(Get),new { channelName = result.Data.Name},  result):BadRequest(result);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ChannelResponse>>> GetAll()
        {
            return Ok(await _service.GetAll());
        }


        [HttpGet("{channelName}")]
        public async Task<ActionResult<ChannelResponse>> Get(string channelName)
        {
            var channel = await _service.GetByNameAsync(channelName);
            return  channel!=null?Ok(channel):NotFound(); 
        }

        [Obsolete]
        [HttpPatch("{id:int}")]
        public async Task<ActionResult<ChannelResponse>> Patch(int id, [FromBody] JsonPatchDocument patchDoc)
        {
            return Ok(new ChannelResponse());
        }

        [Obsolete]
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
