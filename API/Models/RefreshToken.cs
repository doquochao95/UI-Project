using System;
using System.Collections.Generic;

namespace API.Models;

public partial class RefreshToken
{
    public int Id { get; set; }

    public string? Token { get; set; }

    public DateTime Expires { get; set; }

    public DateTime CreatedTime { get; set; }

    public DateTime? RevokedTime { get; set; }

    public string? ReplacedByToken { get; set; }

    public string? ReasonRevoked { get; set; }

    public string Username { get; set; } = null!;
}
