using Api.Domain.Enums;

namespace Api.Domain.Entities
{
    public class Channel
    {
        public int Id { get; set; }
        public DateTime Created_Date { get; set; }
        public DateTime Init_Date { get; set; }
        public DateTime Close_Date { get; set; }
        public string Description { get; set; } = string.Empty;
        public DateTime Duration { get; set; }
        public CHANNEL_STATE State { get; set; }
        public CHANNEL_TYPE Type { get; set; }
        public List<Topic> Topics { get; set; } = new List<Topic>();
    }
}
