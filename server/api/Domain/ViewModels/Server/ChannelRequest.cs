using Api.Domain.Entities;
using Api.Domain.Enums;

namespace Api.Domain.ViewModels.Server
{
    public class ChannelRequest
    {
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
    }
}
