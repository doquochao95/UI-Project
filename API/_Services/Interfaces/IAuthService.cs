using API.DTOs;
using API.Helpers.Parameter;

namespace API._Services.Interfaces
{
    public interface IAuthService
    {
        Task<UserForLoggedDTO?> Login(LoginRequest loginRequest);
        Task<UserForLoggedDTO?> RefreshToken(TokenRequest tokenRequest);
        Task RevokeToken(TokenRequest tokenRequest);
    }
}