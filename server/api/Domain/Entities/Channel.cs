using Api.Domain.Enums;
using Microsoft.EntityFrameworkCore;

namespace Api.Domain.Entities
{
    public class Channel
    {
        public int Id { get; set; }
        public string? LogoUrl { get; set; }  
        public string?  LogoIcon { get; set; }
        public string Name { get; set; } = string.Empty;
        /// <summary>Esto puede ser una descripcion en HTML </summary> 
        public string Description { get; set; } = string.Empty;
        /// <summary>
        /// Email del usuario Mentor que crea el canal
        /// </summary>
        public string? CreatedBy { get; set; }
        public DateTime? CreatedAt { get; set; }
        public List<Session> Sessions { get; set; } = new List<Session>();
    }
}
