using System;
using System.Collections.Generic;

namespace API.Models;

public partial class NsDevice
{
    public int DeviceId { get; set; }

    public string DeviceName { get; set; } = null!;

    public string DeviceCode { get; set; } = null!;

    public string? OnlineStatus { get; set; }

    public int BuildingId { get; set; }

    public virtual NsBuilding Building { get; set; } = null!;

    public virtual ICollection<NsExport> NsExports { get; } = new List<NsExport>();

    public virtual ICollection<NsImport> NsImports { get; } = new List<NsImport>();

    public virtual ICollection<NsPostRecord> NsPostRecords { get; } = new List<NsPostRecord>();

    public virtual ICollection<NsRecycledBox> NsRecycledBoxes { get; } = new List<NsRecycledBox>();

    public virtual ICollection<NsRequest> NsRequests { get; } = new List<NsRequest>();

    public virtual ICollection<NsStaff> NsStaffs { get; } = new List<NsStaff>();

    public virtual ICollection<NsStock> NsStocks { get; } = new List<NsStock>();
}
