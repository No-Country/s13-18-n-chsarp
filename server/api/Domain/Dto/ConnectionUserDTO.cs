
namespace Api.Domain.Dto
{
    public class ConnectionUserDTO
    {
        public int SessionId { get; set; }
        public string UserName { get; set; } = string.Empty;
        public string ConnectionId { get; set; } = string.Empty;
    }
}
