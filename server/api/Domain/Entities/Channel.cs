using Api.Domain.Enums;
using Microsoft.EntityFrameworkCore;

namespace Api.Domain.Entities
{
    public class Channel
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public List<Session> Sessions { get; set; } = new List<Session>();
    }
}
