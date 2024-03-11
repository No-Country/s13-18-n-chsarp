namespace Api.Domain.Entities
{
    public class ConnectionUser
    {
        public int Id { get; set; }
        public int SessionId { get; set; }
        public Session Session { get; set; }
        public string UserName { get; set; } = string.Empty;
        public string ConnectionId { get; set; } = string.Empty;
    }
}
