using AutoMapper;

namespace API.Helpers.AutoMapper
{
    public class AutoMapperConfig
    {
        public static MapperConfiguration RegisterMappings()
        {
            return new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new ModelToDtoProfile());
                cfg.AddProfile(new DtoToModelProfile());
            });
        }
    }
}