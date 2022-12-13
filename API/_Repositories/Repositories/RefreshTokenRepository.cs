using API._Repositories.Interface;
using API.Models;
using API.Data;


namespace API._Repositories.Repositories
{
    public class RefreshTokenRepository : Repository<RefreshToken>, IRefreshTokenRepository
    {
        public RefreshTokenRepository(NeedleSupplierContext context) : base(context)
        {
        }
    }
}