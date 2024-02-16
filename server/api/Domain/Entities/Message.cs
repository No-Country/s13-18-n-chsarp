namespace Api.Domain.Entities
{
    public class Message
    {
        public int Id { get; set; }
        public Guid UserId { get; set; }
        public User User { get; set; }
        public DateTime Date { get; set; }
        public string Text { get; set; } = string.Empty;
        public bool Moderated { get; set; }
        public bool Professional { get; set; }
    }
}
