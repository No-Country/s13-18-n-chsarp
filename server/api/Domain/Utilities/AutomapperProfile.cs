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
        }
    }
}
