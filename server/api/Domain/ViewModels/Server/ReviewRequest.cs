using Api.Domain.Entities;

namespace Api.Domain.ViewModels.Server
{
    public class ReviewRequest
    {
        public string ReceivingUserName { get; set; } = string.Empty;
        public string SenderUserName { get; set; } = string.Empty;
        public string comment { get; set; } = string.Empty;
        public int Stars { get; set; } // de 1 a 5
        public int SessionId { get; set; }
    }
}
