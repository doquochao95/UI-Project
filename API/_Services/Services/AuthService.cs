using API._Repositories;
using API._Services.Interfaces;
using API.DTOs;
using API.Helpers.Parameter;
using API.Helpers.Utilities.JWT;
using API.Models;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
namespace API._Services.Services
{
    public class AuthService : IAuthService
    {
        private readonly IRepositoryAccessor _repositoryAccessor;
        private readonly IMapper _mapper;
        private readonly MapperConfiguration _mapperConfiguration;
        private readonly IConfiguration _configuration;

        private readonly IJwtUtility _jwtUtility;
        public AuthService(
            IRepositoryAccessor repositoryAccessor,
            IMapper mapper,
            IJwtUtility jwtUtility,
            MapperConfiguration mapperConfiguration,
            IConfiguration configuration)
        {
            _repositoryAccessor = repositoryAccessor;
            _mapper = mapper;
            _jwtUtility = jwtUtility;
            _mapperConfiguration = mapperConfiguration;
            _configuration = configuration;
        }
        public async Task<UserForLoggedDTO?> Login(LoginRequest loginRequest)
        {
            if (string.IsNullOrEmpty(loginRequest.Username) ||
            string.IsNullOrEmpty(loginRequest.Password))
                return null;

            var user = await _repositoryAccessor.Staffs.FindSingle(i =>
            i.CardNumber.ToString().Trim().Equals(loginRequest.Username));
            if (user == null || user.UserPassword == null)
                return null;
            if (user.UserPassword == loginRequest.Password)
            {
                var userDTO = _mapper.Map<UserDTO>(user);

                var userrole = await _repositoryAccessor.RoleUser.FindSingle(i => i.Username.Equals(loginRequest.Username));
                var role = _mapper.Map<RoleCoreDTO>(userrole);
                userDTO.Role = role; // impoet role to user

                var token = _jwtUtility.GenarateJwtToken(userDTO);
                var refreshTokenDTO = _jwtUtility.GenarateRefreshToken(userDTO);
                await RemoveOldRefreshTokens(userDTO);
                var refreshToken = _mapper.Map<RefreshToken>(refreshTokenDTO);
                _repositoryAccessor.RefreshToken.Add(refreshToken);
                await _repositoryAccessor.SaveChangesAsync();

                var result = new UserForLoggedDTO
                {
                    User = userDTO,
                    Token = token,
                    RefreshToken = refreshTokenDTO.Token,
                };
                return result;
            }
            else
            {
                return null;
            }

        }
        private async Task RemoveOldRefreshTokens(UserDTO user)
        {
            var refreshTokenDtos = await _repositoryAccessor.RefreshToken
                .FindAll(x => x.Username == user.CardNumber.ToString())
                .ProjectTo<RefreshTOkenDTO>(_mapperConfiguration)
                .ToListAsync();

            // Lấy ra các Refresh Token hết hạn (sau 2 ngày) hoặc không hợp lệ
            refreshTokenDtos = refreshTokenDtos.Where(x => !x.IsActived && x.CreatedTime.AddDays(2) <= DateTime.UtcNow).ToList();

            // Xoá các Refresh Token
            var refreshToken = _mapper.Map<List<RefreshToken>>(refreshTokenDtos);
            _repositoryAccessor.RefreshToken.RemoveMultiple(refreshToken);
            await _repositoryAccessor.SaveChangesAsync();
        }
        public async Task<UserForLoggedDTO?> RefreshToken(TokenRequest tokenRequest)
        {
            var userDTO = await GetUserByRefreshToken(tokenRequest.Token);
            if (userDTO == null)
                return null;
            var refreshTokenDTO = _mapper.Map<RefreshTOkenDTO>(await _repositoryAccessor.RefreshToken.FindSingle(i => i.Token == tokenRequest.Token));
            if (refreshTokenDTO.IsRevoked)
            {
                await RevokeDescendantRefreshTokens(refreshTokenDTO, userDTO, $"Attempted to reuse this revoked ancestor token: {tokenRequest.Token}");
            }
            if (!refreshTokenDTO.IsActived)
            {
                return null;
            }
            var newRefreshTokenDTO = await RotateRefreshToken(refreshTokenDTO, userDTO);
            var newRefreshToken = _mapper.Map<RefreshToken>(newRefreshTokenDTO);
            _repositoryAccessor.RefreshToken.Add(newRefreshToken);
            await _repositoryAccessor.SaveChangesAsync();

            await RemoveOldRefreshTokens(userDTO);

            var JWTToken = _jwtUtility.GenarateJwtToken(userDTO);
            var result = new UserForLoggedDTO
            {
                User = userDTO,
                Token = JWTToken,
                RefreshToken = newRefreshTokenDTO.Token,
            };
            return result;

        }
        private async Task<UserDTO?> GetUserByRefreshToken(string refreshToken)
        {
            var model = await _repositoryAccessor.RefreshToken.FindAll(i => i.Token == refreshToken).FirstOrDefaultAsync();
            if (model == null)
                return null;
            var user = await _repositoryAccessor.Staffs.FindSingle(i => i.CardNumber.ToString() == model.Username);
            var result = _mapper.Map<UserDTO>(user);
            return result;
        }
        public async Task RevokeToken(TokenRequest tokenRequest)
        {
            var userDTO = await GetUserByRefreshToken(tokenRequest.Token);
            if (userDTO != null)
            {
                var refreshTokenDTO = _mapper.Map<RefreshTOkenDTO>(await _repositoryAccessor.RefreshToken.FindSingle(i => i.Token == tokenRequest.Token));
                if (refreshTokenDTO.IsActived)
                    await RevokeRefreshToken(refreshTokenDTO, "Revoked without replacement");
            }
        }
        private async Task RevokeDescendantRefreshTokens(RefreshTOkenDTO refreshTokenDTO, UserDTO user, string reason)
        {
            // Find and remove descendant tokens
            if (!string.IsNullOrEmpty(refreshTokenDTO.ReplacedByToken))
            {
                var decsendantTokenDTO = _mapper.Map<RefreshTOkenDTO>(await _repositoryAccessor.RefreshToken
                    .FindSingle(x => x.Token == refreshTokenDTO.ReplacedByToken));

                if (decsendantTokenDTO!.IsActived)
                    await RevokeRefreshToken(decsendantTokenDTO, reason);
                else
                    await RevokeDescendantRefreshTokens(decsendantTokenDTO, user, reason);
            }
        }
        private async Task RevokeRefreshToken(RefreshTOkenDTO refreshTokenDTO, string reason = null!, string replacedByToken = null!)
        {
            try
            {
                refreshTokenDTO.RevokedTime = DateTime.Now;
                refreshTokenDTO.ReasonRevoked = reason;
                refreshTokenDTO.ReplacedByToken = replacedByToken;

                var refreshToken = _mapper.Map<RefreshToken>(refreshTokenDTO);
                _repositoryAccessor.RefreshToken.Update(refreshToken);
                await _repositoryAccessor.SaveChangesAsync();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }
        private async Task<RefreshTOkenDTO> RotateRefreshToken(RefreshTOkenDTO refreshTokenDTO, UserDTO userDTO)
        {
            var newRefreshTokenDTO = _jwtUtility.GenarateRefreshToken(userDTO);
            await RevokeRefreshToken(refreshTokenDTO, $"Replaced by new token : {newRefreshTokenDTO.Token}", newRefreshTokenDTO.Token!);
            return newRefreshTokenDTO;
        }
    }
}