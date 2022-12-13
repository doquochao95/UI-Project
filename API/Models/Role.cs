using System;
using System.Collections.Generic;

namespace API.Models;

public partial class Role
{
    public string RoleUnique { get; set; } = null!;

    public string RoleName { get; set; } = null!;

    public string CreatedBy { get; set; } = null!;

    public DateTime CreatedTime { get; set; }

    public string? UpdatedBy { get; set; }

    public DateTime? UpdatedTime { get; set; }
}
