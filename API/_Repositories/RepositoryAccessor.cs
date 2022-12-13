using API._Repositories.Interface;
using API._Repositories.Repositories;
using API.Data;

namespace API._Repositories
{
    public class RepositoryAccessor : IRepositoryAccessor
    {
        private readonly NeedleSupplierContext _context;
        public RepositoryAccessor(NeedleSupplierContext context)
        {
            _context = context;
            Staffs = new StaffRepository(context);
            Roles = new RolesRepository(context);
            RefreshToken = new RefreshTokenRepository(context);
            RoleUser = new RoleUserRepository(context);
        }

        public IStaffRepository Staffs { get; private set; }

        public IRolesRepository Roles { get; private set; }

        public IRefreshTokenRepository RefreshToken { get; private set; }

        public IRoleUserRepository RoleUser { get; private set; }

        public async Task<bool> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}