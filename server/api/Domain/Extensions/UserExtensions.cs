using Api.Domain.Entities;
using Api.Domain.ViewModels.Login;

namespace Api.Domain.Extensions;

public static class UserExtensions
{
    public static UserResponse ToResponse(this User user)
    {
        var r = new UserResponse()
        {
            DateOfBirth = user.DateOfBirth.CompareTo(DateTime.Parse("1/1/1"))==-1?null:user.DateOfBirth,
            Dni = user.Dni==""?null:user.Dni,
            Gender = user.Gender,
            IsBanned = user.IsBanned,
            IsDeleted = user.IsDeleted,
            IsVerified = user.IsVerified,
            Name = user.Name
        };
        return r;
    }
}

//TODO automapper