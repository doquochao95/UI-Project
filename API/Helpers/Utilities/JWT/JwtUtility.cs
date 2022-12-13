using API.DTOs;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
#nullable disable
namespace API.Helpers.Utilities.JWT
{
    public class JwtUtility : IJwtUtility
    {
        private readonly IConfiguration _iConfiguration;
        public JwtUtility(IConfiguration iconfiguration)
        {
            _iConfiguration = iconfiguration;
        }
        public string GenarateJwtToken(UserDTO staff)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_iConfiguration.GetSection("CustomSettings:Token").Value));
            var cradentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier,staff.CardNumber.ToString()),
                new Claim(ClaimTypes.Name, staff.StaffName)
            };
            var tokendescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = cradentials
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokendescriptor);
            return tokenHandler.WriteToken(token);
        }

        public RefreshTOkenDTO GenarateRefreshToken(UserDTO staff)
        {
            var rngCryptoServiceProvider = RandomNumberGenerator.Create();
            var randomBytes = new byte[64];
            rngCryptoServiceProvider.GetBytes(randomBytes);

            var refreshToken = new RefreshTOkenDTO
            {
                Token = Convert.ToBase64String(randomBytes),
                Expires = DateTime.UtcNow.AddDays(7),
                CreatedTime = DateTime.UtcNow,
                Username = staff.CardNumber.ToString()
            };

            return refreshToken;
        }

        public string ValidateJwtToken(string token)
        {
            if (token == null)
                return null;
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_iConfiguration.GetSection("CustomSettings:Token").Value);
            try
            {
                tokenHandler.ValidateToken(token, new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ClockSkew = TimeSpan.Zero
                }, out SecurityToken validatedToken);

                var jwtToken = (JwtSecurityToken)validatedToken;
                var username = jwtToken.Claims.First(x => x.Type == "nameid").Value;
                return username;
            }
            catch
            {
                return null;
            }
        }
    }
}