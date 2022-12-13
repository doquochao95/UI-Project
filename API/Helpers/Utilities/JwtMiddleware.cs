using API._Repositories;
using API._Services.Interfaces;
using API._Services.Services;
using API.DTOs;
using API.Helpers.Utilities.JWT;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
#nullable disable
namespace API.Helper.Utilities
{
    public class JwtMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly IConfiguration _configuration;

        public JwtMiddleware(RequestDelegate next, IConfiguration configuration)
        {
            _next = next;
            _configuration = configuration;
        }

        public async Task Invoke(HttpContext context, IUserService staffService, IRepositoryAccessor userService, IJwtUtility jwtUtility)
        {
            var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();

            var username = jwtUtility.ValidateJwtToken(token);
            if (username != null)
            {
                context.Items["User"] = await staffService.GetByCardNumber(username);
            }
            await _next(context);
        }
    }
}