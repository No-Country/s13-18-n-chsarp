namespace Api.Domain.Entities
{
    public class Review
    {
        public int Id { get; set; }
        public Guid UserId { get; set; }
        public User User { get; set; }
        public string SenderUser { get; set; } = string.Empty;
        public string Comment { get; set; } = string.Empty;
        public int Stars { get; set; }
        public DateTime Date { get; set; }
    }
}
