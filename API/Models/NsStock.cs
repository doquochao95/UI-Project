using System;
using System.Collections.Generic;

namespace API.Models;

public partial class NsStock
{
    public int StockId { get; set; }

    public string StockName { get; set; } = null!;

    public int DeviceId { get; set; }

    public int NeedleId { get; set; }

    public int CurrentQuantity { get; set; }

    public virtual NsDevice Device { get; set; } = null!;

    public virtual NsNeedle Needle { get; set; } = null!;

    public virtual ICollection<NsExport> NsExports { get; } = new List<NsExport>();

    public virtual ICollection<NsImport> NsImports { get; } = new List<NsImport>();
}
