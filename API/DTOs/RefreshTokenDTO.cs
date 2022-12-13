namespace API.DTOs
{
    public class RefreshTOkenDTO
    {
        public int Id { get; set; }

        public string? Token { get; set; }

        public DateTime Expires { get; set; }

        public DateTime CreatedTime { get; set; }

        public DateTime? RevokedTime { get; set; }

        public string? ReplacedByToken { get; set; }

        public string? ReasonRevoked { get; set; }

        public string Username { get; set; } = null!;
        public bool IsExpired => DateTime.Now >= Expires;
        public bool IsRevoked => RevokedTime != null;
        public bool IsActived => !IsExpired && !IsRevoked;
    }
}