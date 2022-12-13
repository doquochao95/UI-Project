using API._Repositories.Interface;

namespace API._Repositories
{
    public interface IRepositoryAccessor
    {
        IStaffRepository Staffs { get; }
        IRolesRepository Roles { get; }
        IRefreshTokenRepository RefreshToken { get; }
        IRoleUserRepository RoleUser { get; }
        Task<bool> SaveChangesAsync();

    }
}