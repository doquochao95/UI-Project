using System;
using System.Collections.Generic;

namespace API.Models;

public partial class NsRecycledBox
{
    public int RecycleBoxId { get; set; }

    public int DeviceId { get; set; }

    public int NeedleId { get; set; }

    public DateTime? BrokenTime { get; set; }

    public string? BrokenTimeStr { get; set; }

    public int? Operator { get; set; }

    public string? SewingMachine { get; set; }

    public int? ProcessId { get; set; }

    public int? ReasonId { get; set; }

    public DateTime ExportTime { get; set; }

    public string ExportTimeStr { get; set; } = null!;

    public int GetByStaffId { get; set; }

    public byte[]? RecycleNeedleImage { get; set; }

    public int? NeedlePartsEnough { get; set; }

    public DateTime? ConfirmationTime { get; set; }

    public string? ConfirmationTimeStr { get; set; }

    public int? ConfirmationByStaffId { get; set; }

    public string? Handle { get; set; }

    public string? Po { get; set; }

    public int? InBox { get; set; }

    public decimal? CapturedLength { get; set; }

    public int? DeleteByStaffId { get; set; }

    public DateTime? DeleteTime { get; set; }

    public string? DeleteTimeStr { get; set; }

    public virtual NsStaff? ConfirmationByStaff { get; set; }

    public virtual NsStaff? DeleteByStaff { get; set; }

    public virtual NsDevice Device { get; set; } = null!;

    public virtual NsStaff GetByStaff { get; set; } = null!;

    public virtual NsNeedle Needle { get; set; } = null!;

    public virtual ICollection<NsExport> NsExports { get; } = new List<NsExport>();

    public virtual NsProcess? Process { get; set; }

    public virtual NsBrokenReason? Reason { get; set; }
}
