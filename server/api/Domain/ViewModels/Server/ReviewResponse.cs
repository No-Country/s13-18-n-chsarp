using Api.Domain.Entities;

namespace Api.Domain.ViewModels.Server
{
    public class ReviewResponse
    {
        public string ReceivingUserName { get; set; }
        public string SenderUserName { get; set; } // apodo
        public string comment { get; set; } = string.Empty;
        public int Stars { get; set; } // 1 a 5
        // public int SessionId { get; set; }
        public DateTime Date { get; set; }
    }
}
