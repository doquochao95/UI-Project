using API._Services;
using API._Services.Interfaces;
using API._Services.Services;
using API.Helpers.Parameter;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginRequest model)
        {
            var user = await _authService.Login(model);
            if (user == null)
                return Unauthorized();

            return Ok(new
            {
                token = user.Token,
                user = user,
                refreshToken = user.RefreshToken
            });
        }
        [HttpPost("refreshtoken")]
        public async Task<IActionResult> RefreshToken([FromBody] TokenRequest requestToken)
        {
            var user = await _authService.RefreshToken(requestToken);
            if (user == null)
                return Unauthorized();
            return Ok(new
            {
                token = user.Token,
                user = user,
                refreshToken = user.RefreshToken
            });
        }
        [HttpPost("revoketoken")]
        public async Task<IActionResult> RevokeToken([FromBody] TokenRequest requestToken)
        {
            if (!string.IsNullOrEmpty(requestToken.Token))
                await _authService.RevokeToken(requestToken);
            return NoContent();
        }
    }
}
