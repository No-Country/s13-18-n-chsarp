using Api.Domain.Entities;
using Api.Domain.ViewModels.Login;

namespace Api.Domain.Extensions;

public static class UserExtensions
{
    public static UserResponse ToResponse(this User user)
    {
        return new UserResponse()
        {
            DateOfBirth = user.DateOfBirth,
            Dni = user.Dni,
            Gender = user.Gender,
            IsBanned = user.IsBanned,
            IsDeleted = user.IsDeleted,
            IsVerified = user.IsVerified,
            Name = user.Name
        };
    }
}

//TODO automapper