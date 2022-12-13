using System;
using System.Collections.Generic;

namespace API.Models;

public partial class NsRequest
{
    public int RequestId { get; set; }

    public int DeviceId { get; set; }

    public int NeedleId { get; set; }

    public int RequestByStaffId { get; set; }

    public DateTime RequestTime { get; set; }

    public string RequestTimeStr { get; set; } = null!;

    public DateTime BrokenTime { get; set; }

    public string BrokenTimeStr { get; set; } = null!;

    public int Operator { get; set; }

    public int ProcessId { get; set; }

    public int SewingMachine { get; set; }

    public int ReasonId { get; set; }

    public int NeedlePartsEnough { get; set; }

    public string? Handle { get; set; }

    public int Quantity { get; set; }

    public int AllowByStaffId { get; set; }

    public string? Po { get; set; }

    public virtual NsStaff AllowByStaff { get; set; } = null!;

    public virtual NsDevice Device { get; set; } = null!;

    public virtual NsNeedle Needle { get; set; } = null!;

    public virtual NsProcess Process { get; set; } = null!;

    public virtual NsBrokenReason Reason { get; set; } = null!;

    public virtual NsStaff RequestByStaff { get; set; } = null!;
}
