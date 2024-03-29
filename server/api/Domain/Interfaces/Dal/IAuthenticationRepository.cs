﻿using Api.Domain.ViewModels.Login;

namespace Api.Domain.Interfaces.Dal
{
    public interface IAuthenticationRepository
    {
        Task<RegisterResponse> Register(RegisterRequest request);
        Task<RegisterResponse> ChangeRol(RegisterModeratorRequest request, string email);
        Task<LoginResponse> Login(LoginRequest request);
        Task<RegisterResponse> UserOk(string email);
    }
}
