using System;
using System.Collections.Generic;
using API.Models;
using Microsoft.EntityFrameworkCore;
#nullable disable
namespace API.Data;

public partial class NeedleSupplierContext : DbContext
{
    public NeedleSupplierContext()
    {
    }

    public NeedleSupplierContext(DbContextOptions<NeedleSupplierContext> options)
        : base(options)
    {
    }

    public virtual DbSet<LogEvent> LogEvents { get; set; }

    public virtual DbSet<NsBrokenReason> NsBrokenReasons { get; set; }

    public virtual DbSet<NsBuilding> NsBuildings { get; set; }

    public virtual DbSet<NsDevice> NsDevices { get; set; }

    public virtual DbSet<NsExport> NsExports { get; set; }

    public virtual DbSet<NsImport> NsImports { get; set; }

    public virtual DbSet<NsLine> NsLines { get; set; }

    public virtual DbSet<NsNeedle> NsNeedles { get; set; }

    public virtual DbSet<NsNeedlePosition> NsNeedlePositions { get; set; }

    public virtual DbSet<NsPostRecord> NsPostRecords { get; set; }

    public virtual DbSet<NsProcess> NsProcesses { get; set; }

    public virtual DbSet<NsRecycledBox> NsRecycledBoxes { get; set; }

    public virtual DbSet<NsRequest> NsRequests { get; set; }

    public virtual DbSet<NsStaff> NsStaffs { get; set; }

    public virtual DbSet<NsStock> NsStocks { get; set; }

    public virtual DbSet<RefreshToken> RefreshTokens { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<RoleUser> RoleUsers { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Name=ConnectionStrings:Local_DefaultConnection");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<LogEvent>(entity =>
        {
            entity.HasKey(e => e.LogId);

            entity.Property(e => e.DeviceId).HasColumnName("DeviceID");
            entity.Property(e => e.TimeStamp).HasColumnType("datetime");
        });

        modelBuilder.Entity<NsBrokenReason>(entity =>
        {
            entity.HasKey(e => e.ReasonId);

            entity.ToTable("NS_BrokenReason");

            entity.Property(e => e.ReasonId).HasColumnName("ReasonID");
        });

        modelBuilder.Entity<NsBuilding>(entity =>
        {
            entity.HasKey(e => e.BuildingId).HasName("PK_NS_BUILDINGS");

            entity.ToTable("NS_Buildings");

            entity.Property(e => e.BuildingId).HasColumnName("BuildingID");
        });

        modelBuilder.Entity<NsDevice>(entity =>
        {
            entity.HasKey(e => e.DeviceId).HasName("PK_NS_DEVICES");

            entity.ToTable("NS_Devices");

            entity.Property(e => e.DeviceId).HasColumnName("DeviceID");
            entity.Property(e => e.BuildingId).HasColumnName("BuildingID");

            entity.HasOne(d => d.Building).WithMany(p => p.NsDevices)
                .HasForeignKey(d => d.BuildingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_Devices_NS_Buildings");
        });

        modelBuilder.Entity<NsExport>(entity =>
        {
            entity.HasKey(e => e.ExportId);

            entity.ToTable("NS_Export");

            entity.Property(e => e.ExportId).HasColumnName("ExportID");
            entity.Property(e => e.BuildingId).HasColumnName("BuildingID");
            entity.Property(e => e.DeviceId).HasColumnName("DeviceID");
            entity.Property(e => e.ExportTime).HasColumnType("datetime");
            entity.Property(e => e.NeedleId).HasColumnName("NeedleID");
            entity.Property(e => e.RecycleBoxId).HasColumnName("RecycleBoxID");
            entity.Property(e => e.StaffId).HasColumnName("StaffID");
            entity.Property(e => e.StockId).HasColumnName("StockID");

            entity.HasOne(d => d.Building).WithMany(p => p.NsExports)
                .HasForeignKey(d => d.BuildingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_Export_NS_Buildings");

            entity.HasOne(d => d.Device).WithMany(p => p.NsExports)
                .HasForeignKey(d => d.DeviceId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_Export_NS_Devices");

            entity.HasOne(d => d.Needle).WithMany(p => p.NsExports)
                .HasForeignKey(d => d.NeedleId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_Export_NS_Export");

            entity.HasOne(d => d.RecycleBox).WithMany(p => p.NsExports)
                .HasForeignKey(d => d.RecycleBoxId)
                .HasConstraintName("FK_NS_Export_NS_RecycledBox");

            entity.HasOne(d => d.Staff).WithMany(p => p.NsExports)
                .HasForeignKey(d => d.StaffId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_Export_NS_Staffs");

            entity.HasOne(d => d.Stock).WithMany(p => p.NsExports)
                .HasForeignKey(d => d.StockId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_Export_NS_Stocks");
        });

        modelBuilder.Entity<NsImport>(entity =>
        {
            entity.HasKey(e => e.ImportId).HasName("PK_NS_TRACKING");

            entity.ToTable("NS_Imports");

            entity.Property(e => e.ImportId).HasColumnName("ImportID");
            entity.Property(e => e.BuildingId).HasColumnName("BuildingID");
            entity.Property(e => e.DeviceId).HasColumnName("DeviceID");
            entity.Property(e => e.ImportTime).HasColumnType("datetime");
            entity.Property(e => e.NeedleId).HasColumnName("NeedleID");
            entity.Property(e => e.StaffId).HasColumnName("StaffID");
            entity.Property(e => e.StockId).HasColumnName("StockID");

            entity.HasOne(d => d.Building).WithMany(p => p.NsImports)
                .HasForeignKey(d => d.BuildingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_Imports_NS_Buildings");

            entity.HasOne(d => d.Device).WithMany(p => p.NsImports)
                .HasForeignKey(d => d.DeviceId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_Tracking_NS_Devices");

            entity.HasOne(d => d.Needle).WithMany(p => p.NsImports)
                .HasForeignKey(d => d.NeedleId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_Tracking_NS_Needles");

            entity.HasOne(d => d.Staff).WithMany(p => p.NsImports)
                .HasForeignKey(d => d.StaffId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_Tracking_NS_Staffs");

            entity.HasOne(d => d.Stock).WithMany(p => p.NsImports)
                .HasForeignKey(d => d.StockId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_Imports_NS_Stocks");
        });

        modelBuilder.Entity<NsLine>(entity =>
        {
            entity.HasKey(e => e.LineId).HasName("PK_BS_Lines");

            entity.ToTable("NS_Lines");

            entity.Property(e => e.LineId).HasColumnName("LineID");
            entity.Property(e => e.BuildingId).HasColumnName("BuildingID");

            entity.HasOne(d => d.Building).WithMany(p => p.NsLines)
                .HasForeignKey(d => d.BuildingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_Lines_NS_Buildings");
        });

        modelBuilder.Entity<NsNeedle>(entity =>
        {
            entity.HasKey(e => e.NeedleId).HasName("PK_NS_NEEDLES");

            entity.ToTable("NS_Needles");

            entity.Property(e => e.NeedleId).HasColumnName("NeedleID");
            entity.Property(e => e.NeedleLength).HasColumnType("decimal(5, 2)");
            entity.Property(e => e.NeedlePrice).HasColumnType("decimal(10, 2)");
        });

        modelBuilder.Entity<NsNeedlePosition>(entity =>
        {
            entity.HasKey(e => e.NeedlePositionId);

            entity.ToTable("NS_NeedlePosition");

            entity.Property(e => e.NeedlePositionId).HasColumnName("NeedlePositionID");
            entity.Property(e => e.NeedlePosition)
                .HasMaxLength(10)
                .IsFixedLength();
        });

        modelBuilder.Entity<NsPostRecord>(entity =>
        {
            entity.HasKey(e => e.PostRecordId).HasName("PK_NS_POSTRECORD");

            entity.ToTable("NS_PostRecords");

            entity.Property(e => e.PostRecordId).HasColumnName("PostRecordID");
            entity.Property(e => e.BuildingId).HasColumnName("BuildingID");
            entity.Property(e => e.DeviceId).HasColumnName("DeviceID");
            entity.Property(e => e.PostTime).HasColumnType("datetime");

            entity.HasOne(d => d.Building).WithMany(p => p.NsPostRecords)
                .HasForeignKey(d => d.BuildingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_PostRecord_NS_Buildings");

            entity.HasOne(d => d.Device).WithMany(p => p.NsPostRecords)
                .HasForeignKey(d => d.DeviceId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_PostRecords_NS_Devices");
        });

        modelBuilder.Entity<NsProcess>(entity =>
        {
            entity.HasKey(e => e.ProcessId);

            entity.ToTable("NS_Process");

            entity.Property(e => e.ProcessId).HasColumnName("ProcessID");
        });

        modelBuilder.Entity<NsRecycledBox>(entity =>
        {
            entity.HasKey(e => e.RecycleBoxId);

            entity.ToTable("NS_RecycledBox");

            entity.Property(e => e.RecycleBoxId).HasColumnName("RecycleBoxID");
            entity.Property(e => e.BrokenTime).HasColumnType("datetime");
            entity.Property(e => e.CapturedLength).HasColumnType("decimal(5, 2)");
            entity.Property(e => e.ConfirmationByStaffId).HasColumnName("ConfirmationByStaffID");
            entity.Property(e => e.ConfirmationTime).HasColumnType("datetime");
            entity.Property(e => e.DeleteByStaffId).HasColumnName("DeleteByStaffID");
            entity.Property(e => e.DeleteTime).HasColumnType("datetime");
            entity.Property(e => e.DeviceId).HasColumnName("DeviceID");
            entity.Property(e => e.ExportTime).HasColumnType("datetime");
            entity.Property(e => e.GetByStaffId).HasColumnName("GetByStaffID");
            entity.Property(e => e.NeedleId).HasColumnName("NeedleID");
            entity.Property(e => e.Po).HasColumnName("PO");
            entity.Property(e => e.ProcessId).HasColumnName("ProcessID");
            entity.Property(e => e.ReasonId).HasColumnName("ReasonID");

            entity.HasOne(d => d.ConfirmationByStaff).WithMany(p => p.NsRecycledBoxConfirmationByStaffs)
                .HasForeignKey(d => d.ConfirmationByStaffId)
                .HasConstraintName("FK_NS_RecycledBox_NS_Staffs1");

            entity.HasOne(d => d.DeleteByStaff).WithMany(p => p.NsRecycledBoxDeleteByStaffs)
                .HasForeignKey(d => d.DeleteByStaffId)
                .HasConstraintName("FK_NS_RecycledBox_NS_Staffs2");

            entity.HasOne(d => d.Device).WithMany(p => p.NsRecycledBoxes)
                .HasForeignKey(d => d.DeviceId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_RecycledBox_NS_Devices");

            entity.HasOne(d => d.GetByStaff).WithMany(p => p.NsRecycledBoxGetByStaffs)
                .HasForeignKey(d => d.GetByStaffId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_RecycledBox_NS_Staffs");

            entity.HasOne(d => d.Needle).WithMany(p => p.NsRecycledBoxes)
                .HasForeignKey(d => d.NeedleId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_RecycledBox_NS_Needles");

            entity.HasOne(d => d.Process).WithMany(p => p.NsRecycledBoxes)
                .HasForeignKey(d => d.ProcessId)
                .HasConstraintName("FK_NS_RecycledBox_NS_Process");

            entity.HasOne(d => d.Reason).WithMany(p => p.NsRecycledBoxes)
                .HasForeignKey(d => d.ReasonId)
                .HasConstraintName("FK_NS_RecycledBox_NS_BrokenReason");
        });

        modelBuilder.Entity<NsRequest>(entity =>
        {
            entity.HasKey(e => e.RequestId);

            entity.ToTable("NS_Requests");

            entity.Property(e => e.RequestId).HasColumnName("RequestID");
            entity.Property(e => e.AllowByStaffId).HasColumnName("AllowByStaffID");
            entity.Property(e => e.BrokenTime).HasColumnType("datetime");
            entity.Property(e => e.DeviceId).HasColumnName("DeviceID");
            entity.Property(e => e.NeedleId).HasColumnName("NeedleID");
            entity.Property(e => e.Po).HasColumnName("PO");
            entity.Property(e => e.ProcessId).HasColumnName("ProcessID");
            entity.Property(e => e.ReasonId).HasColumnName("ReasonID");
            entity.Property(e => e.RequestByStaffId).HasColumnName("RequestByStaffID");
            entity.Property(e => e.RequestTime).HasColumnType("datetime");

            entity.HasOne(d => d.AllowByStaff).WithMany(p => p.NsRequestAllowByStaffs)
                .HasForeignKey(d => d.AllowByStaffId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_Requests_NS_Staffs");

            entity.HasOne(d => d.Device).WithMany(p => p.NsRequests)
                .HasForeignKey(d => d.DeviceId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_Requests_NS_Devices");

            entity.HasOne(d => d.Needle).WithMany(p => p.NsRequests)
                .HasForeignKey(d => d.NeedleId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_Requests_NS_Needles");

            entity.HasOne(d => d.Process).WithMany(p => p.NsRequests)
                .HasForeignKey(d => d.ProcessId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_Requests_NS_Process");

            entity.HasOne(d => d.Reason).WithMany(p => p.NsRequests)
                .HasForeignKey(d => d.ReasonId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_Requests_NS_BrokenReason");

            entity.HasOne(d => d.RequestByStaff).WithMany(p => p.NsRequestRequestByStaffs)
                .HasForeignKey(d => d.RequestByStaffId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_Requests_NS_Staffs1");
        });

        modelBuilder.Entity<NsStaff>(entity =>
        {
            entity.HasKey(e => e.StaffId).HasName("PK_NS_STAFFS");

            entity.ToTable("NS_Staffs");

            entity.Property(e => e.StaffId).HasColumnName("StaffID");
            entity.Property(e => e.DeviceId).HasColumnName("DeviceID");
            entity.Property(e => e.LineId).HasColumnName("LineID");
            entity.Property(e => e.Rfidcode).HasColumnName("RFIDCode");

            entity.HasOne(d => d.Device).WithMany(p => p.NsStaffs)
                .HasForeignKey(d => d.DeviceId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_Staffs_NS_Devices");

            entity.HasOne(d => d.Line).WithMany(p => p.NsStaffs)
                .HasForeignKey(d => d.LineId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_Staffs_NS_Lines");
        });

        modelBuilder.Entity<NsStock>(entity =>
        {
            entity.HasKey(e => e.StockId).HasName("PK_NS_STOCK");

            entity.ToTable("NS_Stocks");

            entity.Property(e => e.StockId).HasColumnName("StockID");
            entity.Property(e => e.DeviceId).HasColumnName("DeviceID");
            entity.Property(e => e.NeedleId).HasColumnName("NeedleID");
            entity.Property(e => e.StockName)
                .HasMaxLength(2)
                .IsFixedLength();

            entity.HasOne(d => d.Device).WithMany(p => p.NsStocks)
                .HasForeignKey(d => d.DeviceId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_Stocks_NS_Devices");

            entity.HasOne(d => d.Needle).WithMany(p => p.NsStocks)
                .HasForeignKey(d => d.NeedleId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NS_Stocks_NS_Needles");
        });

        modelBuilder.Entity<RefreshToken>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK_RefreshToken");

            entity.ToTable("Refresh_Token");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.CreatedTime).HasColumnName("Created_Time");
            entity.Property(e => e.ReasonRevoked).HasColumnName("Reason_Revoked");
            entity.Property(e => e.ReplacedByToken).HasColumnName("Replaced_By_Token");
            entity.Property(e => e.RevokedTime).HasColumnName("Revoked_Time");
            entity.Property(e => e.Username)
                .HasMaxLength(10)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.RoleUnique);

            entity.Property(e => e.RoleUnique)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Role_Unique");
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("Created_By");
            entity.Property(e => e.CreatedTime)
                .HasColumnType("datetime")
                .HasColumnName("Created_Time");
            entity.Property(e => e.RoleName)
                .HasMaxLength(200)
                .HasColumnName("Role_Name");
            entity.Property(e => e.UpdatedBy)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("Updated_By");
            entity.Property(e => e.UpdatedTime)
                .HasColumnType("datetime")
                .HasColumnName("Updated_Time");
        });

        modelBuilder.Entity<RoleUser>(entity =>
        {
            entity.HasKey(e => new { e.Username, e.RoleUnique });

            entity.ToTable("Role_User");

            entity.Property(e => e.Username)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.RoleUnique)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Role_Unique");
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("Created_By");
            entity.Property(e => e.CreatedTime)
                .HasColumnType("datetime")
                .HasColumnName("Created_Time");
            entity.Property(e => e.UpdatedBy)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("Updated_By");
            entity.Property(e => e.UpdatedTime)
                .HasColumnType("datetime")
                .HasColumnName("Updated_Time");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
