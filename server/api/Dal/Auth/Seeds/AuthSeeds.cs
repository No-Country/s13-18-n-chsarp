using Api.Domain.Entities;
using Azure.Core;
using Microsoft.AspNetCore.Identity;

namespace Api.Dal.Auth.Seeds;
public static class AuthSeeds
{
    public static async Task Seed(IServiceProvider services)
    {
        await SeedRoles(services);
        await SeedUsers(services);
    }

    private static async Task SeedRoles(IServiceProvider services)
    {
        var _roleManager = services.GetRequiredService<RoleManager<IdentityRole>>();

        await _roleManager.CreateAsync(new IdentityRole(Role.Moderator));
        await _roleManager.CreateAsync(new IdentityRole(Role.User));
    }

    private static async Task SeedUsers(IServiceProvider services)
    {
        var _userManager = services.GetRequiredService<UserManager<User>>();
        var _roleManager = services.GetRequiredService<RoleManager<IdentityRole>>();
        //get users from file
        var password = "Test123!";

        User user = new User()
        {
            Email = "moderadorr@app.com",
            Name = "Moderador",
            UserName = "Moderador",
            Dni = "",
            DateOfBirth = DateTime.Now.AddYears(20),
            Gender = "N/A",
            UrlProfileImage = null
        };

        var result = await _userManager.CreateAsync(user, password);

       if(result.Succeeded)
        {
            //set role
           var roleSetResult = await _userManager.AddToRoleAsync(user, Role.Moderator);
        }
    }
}