namespace Api.Domain.Entities
{
    public class Review
    {
        public int Id { get; set; }
        public Guid ReceivingUserId { get; set; }
        public User ReceivingUser { get; set; }
        public Guid SenderUserId { get; set; }
        public User SenderUser { get; set; }
        public string comment { get; set; } = string.Empty;
        public int Stars { get; set; }
        public int SessionId { get; set; }
        public Session Session { get; set; }
        public DateTime Date { get; set; }
    }
}
