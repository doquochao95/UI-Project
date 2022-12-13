using API.DTOs;
using API.Models;

namespace API._Services.Interfaces
{
    public interface IUserService
    {
        Task<List<UserDTO>> GetAllStaff();
        Task<UserDTO> GetByCardNumber(string cardNumber);
    }
}