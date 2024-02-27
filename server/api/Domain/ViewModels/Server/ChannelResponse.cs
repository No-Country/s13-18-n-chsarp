using Api.Domain.Entities;
using Api.Domain.Enums;

namespace Api.Domain.ViewModels.Server
{
    public class ChannelResponse
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? LogoUrl { get; set; }
        public string? LogoIcon { get; set; }
        public string Description { get; set; } = string.Empty;
        public List<SessionResponse> Sessions { get; set; } = new List<SessionResponse>();
    }

    public class ChannelCreatedResponse
    {
        public bool Result { get; set; } = false;
        public string? ResultMessage { get; set; }
        public ChannelResponse? Data { get; set; }
    }
}
