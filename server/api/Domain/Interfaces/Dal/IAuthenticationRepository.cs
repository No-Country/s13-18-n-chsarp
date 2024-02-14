using Api.Domain.ViewModels.Login;

namespace Api.Domain.Interfaces.Dal
{
    public interface IAuthenticationRepository
    {
        Task<RegisterResponse> Register(RegisterRequest request);

        Task<LoginResponse> Login(LoginRequest request);
    }
}
