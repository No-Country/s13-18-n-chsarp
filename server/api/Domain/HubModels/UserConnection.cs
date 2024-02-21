namespace Api.Domain.HubModels
{
    public class UserConnection
    {
        public int SessionId { get; set; }
        public string UserName { get; set; } = string.Empty;
        public string ChatRoom { get; set; } = string.Empty;
    }
}
