using Api.Domain.Entities;
using Api.Domain.Enums;

namespace Api.Domain.ViewModels.Server
{
    public class ChannelRequest
    {
        public string Description { get; set; } = string.Empty;
        public CHANNEL_STATE State { get; set; }
        public CHANNEL_TYPE Type { get; set; }
        public List<TopicVModel> Topics { get; set; } = new List<TopicVModel>();
    }
}
