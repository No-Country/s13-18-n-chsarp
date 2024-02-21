﻿namespace Api.Domain.Entities
{
    public class Message
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public int SessionId { get; set; }
        public Session Session { get; set; }
        public DateTime Date { get; set; }
        public string Text { get; set; } = string.Empty;
        public bool Moderated { get; set; }
        public bool Professional { get; set; }
        public bool AutoGenerated { get; set; }
    }
}
