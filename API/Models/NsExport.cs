using System;
using System.Collections.Generic;

namespace API.Models;

public partial class NsExport
{
    public int ExportId { get; set; }

    public int DeviceId { get; set; }

    public int BuildingId { get; set; }

    public int NeedleId { get; set; }

    public DateTime ExportTime { get; set; }

    public string ExprtTimeString { get; set; } = null!;

    public int Quantity { get; set; }

    public int StaffId { get; set; }

    public int StockId { get; set; }

    public int? RecycleBoxId { get; set; }

    public virtual NsBuilding Building { get; set; } = null!;

    public virtual NsDevice Device { get; set; } = null!;

    public virtual NsNeedle Needle { get; set; } = null!;

    public virtual NsRecycledBox? RecycleBox { get; set; }

    public virtual NsStaff Staff { get; set; } = null!;

    public virtual NsStock Stock { get; set; } = null!;
}
