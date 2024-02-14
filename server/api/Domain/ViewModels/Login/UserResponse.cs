namespace Api.Domain.ViewModels.Login;

public class UserResponse 
{
    public string Name { get; set; } = string.Empty;
    public string Dni { get; set; } = string.Empty;
    public DateTime DateOfBirth { get; set; } = DateTime.UtcNow;
    public bool IsVerified { get; set; } = false;
    public bool IsDeleted { get; set; } = false;
    public bool IsBanned { get; set; } = false;
    public string Gender { get; set; } = string.Empty;
}
