using System;
using System.Collections.Generic;

namespace API.Models;

public partial class NsBuilding
{
    public int BuildingId { get; set; }

    public string BuildingName { get; set; } = null!;

    public virtual ICollection<NsDevice> NsDevices { get; } = new List<NsDevice>();

    public virtual ICollection<NsExport> NsExports { get; } = new List<NsExport>();

    public virtual ICollection<NsImport> NsImports { get; } = new List<NsImport>();

    public virtual ICollection<NsLine> NsLines { get; } = new List<NsLine>();

    public virtual ICollection<NsPostRecord> NsPostRecords { get; } = new List<NsPostRecord>();
}
