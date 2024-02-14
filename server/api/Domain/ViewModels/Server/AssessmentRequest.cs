using Api.Domain.Entities;

namespace Api.Domain.ViewModels.Server
{
    public class AssessmentRequest
    {
        public Guid ReceivingUserId { get; set; }
        public Guid SenderUserId { get; set; }
        public string comment { get; set; } = string.Empty;
        public int Stars { get; set; }
        public int SessionId { get; set; }
    }
}
