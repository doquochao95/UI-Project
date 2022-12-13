using API._Repositories.Interface;
using API.Models;
using API.Data;


namespace API._Repositories.Repositories
{
    public class StaffRepository : Repository<NsStaff>, IStaffRepository
    {
        public StaffRepository(NeedleSupplierContext context) : base(context)
        {
        }
    }
}