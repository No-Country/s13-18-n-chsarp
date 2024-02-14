using Api.Domain.Entities;

namespace Api.Domain.ViewModels.Server
{
    public class AssessmentResponse
    {
        public int Id { get; set; }
        public User ReceivingUser { get; set; }
        public string SenderUser { get; set; } // apodo
        public string comment { get; set; } = string.Empty;
        public int Stars { get; set; }
        public Session Session { get; set; }
        public DateTime Date { get; set; }
    }
}
