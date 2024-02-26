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
                Dni = request.Dni??"",
                DateOfBirth = request.DateOfBirth??new DateTime(1,1,1),
                Gender = request.Gender,
            };

            var result = await _userManager.CreateAsync(user, request.Password);

            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, Role.User);
                var jwt = GetToken(user, new[] { new Claim("Role", Role.User) });
                return new RegisterResponse(jwt,user.Email, "Success", true, user.ToResponse());
            }
            else
            {
                var messages = string.Join("-", result.Errors.Select(x => $"{x.Code}|{x.Description}"));
                return new RegisterResponse("", "", messages, false, null);
            }
        }
        catch (Exception e)
        {
            return new RegisterResponse("", "", e.Message, false, null);
        }
    }
    public async Task<LoginResponse> Login(LoginRequest request)
    {
        var user = await _userManager.FindByEmailAsync(request.Email);

        // Check credentials 

        if (user is null || !await _userManager.CheckPasswordAsync(user, request.Password))
        {
            return new LoginResponse(null,"", "Invalid Credentials", false, null);
        }

        var authClaims = new List<Claim>
        {
            new("Name", user.Name),
            new("Email", user.Email),
            new("Id", user.Id),
            new("UserName", user.UserName),
            new("IsVerified", user.IsVerified.ToString())
        };

        var userRoles = await _userManager.GetRolesAsync(user);

        authClaims.AddRange(userRoles.Select(userRole => new Claim("Role", userRole)));

        var token = GetToken(authClaims);

        return new LoginResponse(new JwtSecurityTokenHandler().WriteToken(token), user.Email, "Login Successful", true, user.ToResponse());
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
            new("Id", user.Id)
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
}
