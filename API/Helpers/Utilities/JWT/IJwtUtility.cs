using API.DTOs;

namespace API.Helpers.Utilities.JWT
{
    public interface IJwtUtility
    {
        public string GenarateJwtToken(UserDTO staff); // Create
        public string ValidateJwtToken(string token); // Confirm
        public RefreshTOkenDTO GenarateRefreshToken(UserDTO staff);
    }
}