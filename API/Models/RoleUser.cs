using System;
using System.Collections.Generic;

namespace API.Models;

public partial class RoleUser
{
    public string Username { get; set; } = null!;

    public string RoleUnique { get; set; } = null!;

    public string CreatedBy { get; set; } = null!;

    public DateTime CreatedTime { get; set; }

    public string? UpdatedBy { get; set; }

    public DateTime? UpdatedTime { get; set; }
}
