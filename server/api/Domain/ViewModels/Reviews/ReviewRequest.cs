using System.ComponentModel.DataAnnotations;

namespace Api.Domain.ViewModels.Reviews
{
    public class ReviewRequest
    {
        [Required]
        public Guid UserId { get; set; }
        public string? Comment { get; set; }
        [Required]
        public int Stars { get; set; }
    }

    public class ReviewCreateRequest : ReviewRequest
    {
        public string SenderUser { get; set; }
    }
}
