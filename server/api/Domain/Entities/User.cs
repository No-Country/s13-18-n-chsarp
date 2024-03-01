using Microsoft.AspNetCore.Identity;

namespace Api.Domain.Entities;

public class User : IdentityUser
{
    public string Name { get; set; } = string.Empty;
    public string Dni { get; set; } = string.Empty;
    public DateTime DateOfBirth { get; set; } = DateTime.UtcNow;
    public bool IsVerified { get; set; } = false;
    public bool IsDeleted { get; set; } = false;
    public bool IsBanned { get; set; } = false;
    public string Gender { get; set; } = string.Empty;
    public string? UrlProfileImage { get; set; }
    public string? Country { get; set; }
    public List<Review> Reviews { get; set; } = new List<Review>();
}



