using System;
using System.Collections.Generic;

namespace API.Models;

public partial class NsStaff
{
    public int StaffId { get; set; }

    public string StaffName { get; set; } = null!;

    public int CardNumber { get; set; }

    public string Department { get; set; } = null!;

    public int LineId { get; set; }

    public string Rfidcode { get; set; } = null!;

    public int DeviceId { get; set; }

    public string? UserName { get; set; }

    public string? UserPassword { get; set; }

    public string UserLayer { get; set; } = null!;

    public virtual NsDevice Device { get; set; } = null!;

    public virtual NsLine Line { get; set; } = null!;

    public virtual ICollection<NsExport> NsExports { get; } = new List<NsExport>();

    public virtual ICollection<NsImport> NsImports { get; } = new List<NsImport>();

    public virtual ICollection<NsRecycledBox> NsRecycledBoxConfirmationByStaffs { get; } = new List<NsRecycledBox>();

    public virtual ICollection<NsRecycledBox> NsRecycledBoxDeleteByStaffs { get; } = new List<NsRecycledBox>();

    public virtual ICollection<NsRecycledBox> NsRecycledBoxGetByStaffs { get; } = new List<NsRecycledBox>();

    public virtual ICollection<NsRequest> NsRequestAllowByStaffs { get; } = new List<NsRequest>();

    public virtual ICollection<NsRequest> NsRequestRequestByStaffs { get; } = new List<NsRequest>();
}
