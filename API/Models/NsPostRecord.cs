using System;
using System.Collections.Generic;

namespace API.Models;

public partial class NsPostRecord
{
    public int PostRecordId { get; set; }

    public DateTime? PostTime { get; set; }

    public string? PostTimeStr { get; set; }

    public int DeviceId { get; set; }

    public int BuildingId { get; set; }

    public virtual NsBuilding Building { get; set; } = null!;

    public virtual NsDevice Device { get; set; } = null!;
}
