using System;
using System.Collections.Generic;

namespace API.DTOs;

public partial class UserDTO
{

    public string StaffName { get; set; } = null!;

    public int CardNumber { get; set; }

    public string Department { get; set; } = null!;

    public int LineId { get; set; }

    public string Rfidcode { get; set; } = null!;

    public int DeviceId { get; set; }

    public string? UserName { get; set; }

    public string? UserPassword { get; set; }

    public string UserLayer { get; set; } = null!;

    public bool Is_Admin => UserLayer == "admin" || UserLayer == "dev";
    
    public RoleCoreDTO Role { get; set; } = null!;
}
