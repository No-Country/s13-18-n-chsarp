using Api.Domain.Entities;
using Api.Domain.Enums;

namespace Api.Domain.ViewModels.Server
{
    public class ChannelResponse
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public List<SessionResponse> Sessions { get; set; } = new List<SessionResponse>();
    }
}
