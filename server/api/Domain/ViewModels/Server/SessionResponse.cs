using Api.Domain.Entities;
using Api.Domain.Enums.Channel;

namespace Api.Domain.ViewModels.Server
{
    public class SessionResponse
    {
        public int Id { get; set; }
        public int ChannelId { get; set; }
        public string Name { get; set; } = string.Empty;
        public Guid ModeratorId { get; set; }
        public List<MessageVModel> Messages { get; set; } = new List<MessageVModel>();
        public string ModeratorName { get; set; } = string.Empty;
        public DateTime Created_Date { get; set; }
        public DateTime? Init_Date { get; set; }
        public DateTime? Close_Date { get; set; }
        public TimeSpan? Duration { get; set; }
        public CHANNEL_STATE State { get; set; }
        public CHANNEL_TYPE Type { get; set; }
    }
}
