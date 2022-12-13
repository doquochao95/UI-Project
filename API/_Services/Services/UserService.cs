using API._Repositories;
using API._Services.Interfaces;
using API.DTOs;
using API.Models;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace API._Services.Services
{
    public class UserService : IUserService
    {
        private readonly IRepositoryAccessor _repositoryAccessor;
        private readonly IMapper _mapper;
        public UserService(
            IRepositoryAccessor repositoryAccessor,
            IMapper mapper)
        {
            _repositoryAccessor = repositoryAccessor;
            _mapper = mapper;
        }
        public async Task<List<UserDTO>> GetAllStaff()
        {
            var staffs = await _repositoryAccessor.Staffs.FindAll().ToListAsync();
            var results = new List<UserDTO>();
            foreach (var staff in staffs)
            {
                var result = _mapper.Map<UserDTO>(staff);
                var userrole = await _repositoryAccessor.RoleUser.FindSingle(i => i.Username == result.CardNumber.ToString());
                if (userrole == null)
                {
                    results.Add(result);
                }
                else
                {
                    var userroleDTO = _mapper.Map<RoleCoreDTO>(userrole);
                    result.Role = userroleDTO;
                    results.Add(result);
                }
            }
            return results;
        }

        public async Task<UserDTO> GetByCardNumber(string cardNumber)
        {
            var staff = await _repositoryAccessor.Staffs.FindAll(i => i.CardNumber.ToString() == cardNumber).FirstOrDefaultAsync();
            return _mapper.Map<UserDTO>(staff);
        }

        

    }
}