using Api.Domain.Dto;
using Api.Domain.Entities;
using Api.Domain.ViewModels.Server;
using AutoMapper;

namespace Api.Domain.Utilities
{
    public class AutomapperProfile: Profile
    {
        public AutomapperProfile() 
        {
            CreateMap<Session, SessionResponse>().IncludeAllDerived();

            CreateMap<Message, MessageVModel>();

            CreateMap<Channel, ChannelResponse>().IncludeAllDerived();
            CreateMap<Channel, ChannelCreateRequest>().IncludeAllDerived();
            CreateMap<ChannelCreateRequest, Channel>().IncludeAllDerived();
            CreateMap<ChannelRequest, Channel>().IncludeAllDerived();
            CreateMap<ConnectionUser, ConnectionUserDTO>().ReverseMap();
        }
    }
}
