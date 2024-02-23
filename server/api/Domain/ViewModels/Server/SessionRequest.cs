using Api.Domain.Entities;
using Api.Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace Api.Domain.ViewModels.Server
{
    public class SessionRequest
    {
        [Required]
        public int ChannelId { get; set; }
        [Required]
        [MinLength(3)]
        public string Name { get; set; } = string.Empty;
        public DateTime? Init_Date { get; set; }
        public DateTime? Close_Date { get; set; }
    }
}
