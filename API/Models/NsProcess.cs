using System;
using System.Collections.Generic;

namespace API.Models;

public partial class NsProcess
{
    public int ProcessId { get; set; }

    public string? ProcessName { get; set; }

    public virtual ICollection<NsRecycledBox> NsRecycledBoxes { get; } = new List<NsRecycledBox>();

    public virtual ICollection<NsRequest> NsRequests { get; } = new List<NsRequest>();
}
