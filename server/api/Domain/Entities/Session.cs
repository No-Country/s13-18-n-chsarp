namespace Api.Domain.Entities
{
    public class Session
    {
        public int Id { get; set; }
        public int ChannelId { get; set; }
        public Channel Channel { get; set; }
        public List<Message> Messages { get; set; }
    }
}
