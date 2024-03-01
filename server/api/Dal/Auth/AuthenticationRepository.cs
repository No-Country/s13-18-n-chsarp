using Api.Domain.Entities;
using Api.Domain.Extensions;
using Api.Domain.Interfaces.Dal;
using Api.Domain.ViewModels.Login;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Api.Dal.Auth;

public class AuthenticationRepository : IAuthenticationRepository
{
    private readonly UserManager<User> _userManager;
    private readonly IConfiguration _configuration;
    public AuthenticationRepository(UserManager<User> userManager, IConfiguration configuration)
    {
        _userManager = userManager;
        _configuration = configuration;
    }

    public async Task<RegisterResponse> Register(RegisterRequest request)
    {
        try
        {
            User user = new User()
            {
                Email = request.Email,
                Name = request.Name,
                UserName = request.Email,
                Dni = request.Dni ?? "",
                DateOfBirth = request.DateOfBirth ?? new DateTime(1, 1, 1),
                Gender = request.Gender,
                UrlProfileImage = null,
                Country = null
            };

            var result = await _userManager.CreateAsync(user, request.Password);

            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, Role.User);
                var jwt = GetToken(user, new[] { new Claim("Role", Role.User) });
                return new RegisterResponse(jwt, user.Email, "Success", true, user.ToResponse(), Role.User);
            }
            else
            {
                var messages = string.Join("-", result.Errors.Select(x => $"{x.Code}|{x.Description}"));
                return new RegisterResponse("", "", messages, false, null, null);
            }
        }
        catch (Exception e)
        {
            return new RegisterResponse("", "", e.Message, false, null, null);
        }
    }
    public async Task<LoginResponse> Login(LoginRequest request)
    {
        var user = await _userManager.FindByEmailAsync(request.Email);

        // Check credentials 

        if (user is null || !await _userManager.CheckPasswordAsync(user, request.Password))
        {
            return new LoginResponse(null, "", "Invalid Credentials", false, null, null);
        }

        var authClaims = new List<Claim>
        {
            new("Name", user.Name),
            new("Email", user.Email),
            new("Id", user.Id),
            new("UserName", user.UserName)
        };

        var userRoles = await _userManager.GetRolesAsync(user);

        authClaims.AddRange(userRoles.Select(userRole => new Claim("Role", userRole)));

        var token = GetToken(authClaims);

        return new LoginResponse(new JwtSecurityTokenHandler().WriteToken(token), user.Email, "Login Successful", true, user.ToResponse(), userRoles[0]);
    }


    private JwtSecurityToken GetToken(IEnumerable<Claim> authClaims)
    {
        var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Key"]));

        var token = new JwtSecurityToken(
            issuer: _configuration["JWT:Issuer"],
            audience: _configuration["JWT:Audience"],
            expires: DateTime.Now.AddHours(15),
            claims: authClaims,
            signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256));

        return token;
    }

    private string GetToken(User user, IEnumerable<Claim>? additionalClaims)
    {
        var authClaims = new List<Claim>
        {
            new("Name", user.Name),
            new("Email", user.Email),
            new("Id", user.Id),
            new("UserName", user.UserName)
        };

        authClaims.AddRange(additionalClaims);

        var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Key"]));

        var token = new JwtSecurityToken(
            issuer: _configuration["JWT:Issuer"],
            audience: _configuration["JWT:Audience"],
            expires: DateTime.Now.AddHours(15),
            claims: authClaims,
            signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256));

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    public async Task<RegisterResponse> ChangeRol(RegisterModeratorRequest request, string email)
    {
        var user = await _userManager.FindByEmailAsync(email);

        try
        {
            user.Dni = request.Dni;
            user.DateOfBirth = request.DateOfBirth;
            user.Gender = request.Gender;
            user.UrlProfileImage = request.UrlProfileImage;
            user.Country = request.Country;

            var result = await _userManager.UpdateAsync(user);

            if (result.Succeeded)
            {
                await _userManager.RemoveFromRoleAsync(user, Role.User);
                await _userManager.AddToRoleAsync(user, Role.Moderator);
                var jwt = GetToken(user, new[] { new Claim("Role", Role.Moderator) });
                return new RegisterResponse(jwt, user.Email, "Success", true, user.ToResponse(), Role.Moderator);
            }
            else
            {
                var messages = string.Join("-", result.Errors.Select(x => $"{x.Code}|{x.Description}"));
                return new RegisterResponse("", "", messages, false, null, null);
            }
        }
        catch (Exception e)
        {
            return new RegisterResponse("", "", e.Message, false, null, null);
        }
    }
}
