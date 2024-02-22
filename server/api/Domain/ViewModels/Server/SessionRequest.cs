﻿using Api.Domain.Entities;
using Api.Domain.Enums;

namespace Api.Domain.ViewModels.Server
{
    public class SessionRequest
    {
        public int ChannelId { get; set; } 
        public string Name { get; set; } = string.Empty;
        public List<MessageVModel>? Messages { get; set; } = new List<MessageVModel>();
        public string ModeratorName { get; set; } = string.Empty;
        public DateTime? Init_Date { get; set; }
        public DateTime? Close_Date { get; set; }
    }
}
