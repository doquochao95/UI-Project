using System.Text.Json.Serialization;

namespace API.DTOs
{
    public class UserForLoggedDTO
    {
        [JsonIgnore]
        public string Token { get; set; } = null!;
        
        public UserDTO User { get; set; } = null!;

        [JsonIgnore]
        public string? RefreshToken { get; set; } = null!;

    }
}