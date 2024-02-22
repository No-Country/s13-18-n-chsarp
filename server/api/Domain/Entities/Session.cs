using Api.Domain.Enums.Channel;

namespace Api.Domain.Entities
{
    public class Session
    {
        public int Id { get; set; }
        public int ChannelId { get; set; }
        public Channel Channel { get; set; }
        public string Name { get; set; }
        public List<Message> Messages { get; set; } = new List<Message>();
        public string ModeratorName { get; set; } = string.Empty;
        public DateTime Created_Date { get; set; }
        public DateTime? Init_Date { get; set; }
        public DateTime? Close_Date { get; set; }
        public TimeSpan? Duration { get; set; }
        public CHANNEL_STATE State { get; set; }
        public CHANNEL_TYPE Type { get; set; }
    }
}
