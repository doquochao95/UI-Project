using System;
using System.Collections.Generic;

namespace API.Models;

public partial class NsNeedle
{
    public int NeedleId { get; set; }

    public int NeedleName { get; set; }

    public string NeedleCode { get; set; } = null!;

    public string NeedleSize { get; set; } = null!;

    public string NeedlePoint { get; set; } = null!;

    public decimal NeedlePrice { get; set; }

    public decimal? NeedleLength { get; set; }

    public byte[]? PointTypeImage { get; set; }

    public byte[]? RealityImage { get; set; }

    public int NeedleWarehouseCode { get; set; }

    public virtual ICollection<NsExport> NsExports { get; } = new List<NsExport>();

    public virtual ICollection<NsImport> NsImports { get; } = new List<NsImport>();

    public virtual ICollection<NsRecycledBox> NsRecycledBoxes { get; } = new List<NsRecycledBox>();

    public virtual ICollection<NsRequest> NsRequests { get; } = new List<NsRequest>();

    public virtual ICollection<NsStock> NsStocks { get; } = new List<NsStock>();
}
