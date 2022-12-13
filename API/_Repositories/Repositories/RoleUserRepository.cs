using API._Repositories.Interface;
using API.Models;
using API.Data;


namespace API._Repositories.Repositories
{
    public class RoleUserRepository : Repository<RoleUser>, IRoleUserRepository
    {
        public RoleUserRepository(NeedleSupplierContext context) : base(context)
        {
        }
    }
}