using System;
using System.Collections.Generic;

namespace API.Models;

public partial class NsBrokenReason
{
    public int ReasonId { get; set; }

    public string? ReasonName { get; set; }

    public virtual ICollection<NsRecycledBox> NsRecycledBoxes { get; } = new List<NsRecycledBox>();

    public virtual ICollection<NsRequest> NsRequests { get; } = new List<NsRequest>();
}
