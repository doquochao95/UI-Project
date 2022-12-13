using System;
using System.Collections.Generic;

namespace API.Models;

public partial class NsLine
{
    public int LineId { get; set; }

    public string LineName { get; set; } = null!;

    public int BuildingId { get; set; }

    public virtual NsBuilding Building { get; set; } = null!;

    public virtual ICollection<NsStaff> NsStaffs { get; } = new List<NsStaff>();
}
