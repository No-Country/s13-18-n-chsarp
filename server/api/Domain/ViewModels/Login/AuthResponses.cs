using Microsoft.AspNetCore.Identity;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace Api.Domain.ViewModels.Login;

public record RegisterResponse(
    string? jwt, string message, bool isSuccesfully, UserResponse? user
);

public record LoginResponse(
    string? jwt, string message, bool isSuccesfully, UserResponse? user
);
