using API.DTOs;
using API.Models;
using AutoMapper;

namespace API.Helpers.AutoMapper;
public class ModelToDtoProfile : Profile
{
    public ModelToDtoProfile()
    {
        CreateMap<NsStaff, UserDTO>();
        CreateMap<Role, RoleDTO>();
        CreateMap<RefreshToken, RefreshTOkenDTO>();
        CreateMap<RoleUser, RoleCoreDTO>()
        .ForMember(d => d.RoleUnique, o => o.MapFrom(src => $"{src.RoleUnique}"));
    }
}