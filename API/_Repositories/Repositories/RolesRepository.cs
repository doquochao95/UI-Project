using API._Repositories.Interface;
using API.Models;
using API.Data;


namespace API._Repositories.Repositories
{
    public class RolesRepository : Repository<Role>, IRolesRepository
    {
        public RolesRepository(NeedleSupplierContext context) : base(context)
        {
        }
    }
}