using System.ComponentModel.DataAnnotations;

namespace Api.Domain.ViewModels.Login;
public record LoginRequest(
    string Email,
    string Password
);

public record RegisterRequest(
    [Required]
    string Name,
    [EmailAddress]
    string Email,
    [Required]
    string Password,
    string? Dni,
    DateTime? DateOfBirth,
    string Gender
);

public record RegisterModeratorRequest(
    [Required]
    string Dni,
    [Required]
    DateTime DateOfBirth,
    [Required]
    string Gender,
    [Required]
    string UrlProfileImage
);