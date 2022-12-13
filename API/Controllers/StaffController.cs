using API._Services;
using API._Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class StaffController : ApiController
    {
        private readonly IUserService _staffService;
        public StaffController(IUserService staffService)
        {
            _staffService = staffService;
        }
        [HttpGet("staffs")]
        public async Task<IActionResult> GetStaffs()
        {
            return Ok(await _staffService.GetAllStaff());
        }
    }
}