using API.DTOs;
using API.Models;
using AutoMapper;

namespace API.Helpers.AutoMapper;
public class DtoToModelProfile : Profile
{
    public DtoToModelProfile()
    {
        CreateMap<UserDTO, NsStaff>();
        CreateMap<RoleDTO, Role>();
        CreateMap<RefreshTOkenDTO, RefreshToken>();

        // .ForMember(
        //             dest => dest.UserName,
        //             opt => opt.MapFrom(src => $"{src.UserName}")
        //         );
    }
}