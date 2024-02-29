using Microsoft.EntityFrameworkCore;

namespace Api.Domain.ViewModels.Reviews
{
    public class ReviewListResponse
    {
        [Precision(2,1)]
        public decimal AverageStars { get; set; }
        public List<ReviewResponse> Reviews { get; set; } = new List<ReviewResponse>();
    }

    public class ReviewResponse
    {
        public string SenderUser { get; set; } = string.Empty;
        public string Comment { get; set; } = string.Empty;
        public int Stars { get; set; }
        public DateTime Date { get; set; }
    }
}
