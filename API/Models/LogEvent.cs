using System;
using System.Collections.Generic;

namespace API.Models;

public partial class LogEvent
{
    public int LogId { get; set; }

    public string? Message { get; set; }

    public string? LogType { get; set; }

    public DateTime? TimeStamp { get; set; }

    public string? Exception { get; set; }

    public string? Properties { get; set; }

    public string? MassageString { get; set; }

    public string? DeviceId { get; set; }
}
