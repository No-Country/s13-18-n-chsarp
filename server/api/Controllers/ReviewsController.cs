using Api.Domain.Interfaces.Bll;
using Api.Domain.ViewModels.Reviews;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        private readonly IReviewService _reviewService;
        public ReviewsController(IReviewService reviewService)
        {
            _reviewService = reviewService;
        }

        [HttpGet("{id:Guid}")]
        public async Task<ActionResult<ReviewListResponse>> GetAllById(Guid id)
        {
            var result = await _reviewService.GetAllByUser(id);
            return Ok(result);
        }

        [HttpPost()]
        [Authorize]
        public async Task<ActionResult> RegisterTopic([FromBody] ReviewRequest request)
        {
            var name = HttpContext.User.Claims.Where(c => c.Type == "Name").FirstOrDefault().Value;
            var requestCreate = new ReviewCreateRequest()
            {
                SenderUser = name,
                Comment = request.Comment,
                Stars = request.Stars,
                UserId = request.UserId
            };
            await _reviewService.Create(requestCreate);
            return Created();
        }
    }
}
