﻿using Api.Dal;
using Api.Domain.Entities;
using Api.Domain.Interfaces.Bll;
using Api.Domain.ViewModels.Server;
using AutoMapper;
using Azure;
using Microsoft.EntityFrameworkCore;

namespace Api.Bll
{
    public class ChannelService(IMapper _mapper, Context _context, IReviewService _reviewService)
    {
        public IEnumerable<ChannelResponse> GetChannels()
        {
            return new List<ChannelResponse>();
        }

        public async Task<ChannelCreatedResponse> CreateChannelAsync(ChannelRequest req, string mentorMail)
        {
            //TODO validar si el usuario Mentor esta habilitado => verificado
            //validar que no existe un canal con el mismo nombre
            try
            {
                var canalConMismoNombre = _context.Channels.FirstOrDefault(x => x.Name == req.Name);
                if (canalConMismoNombre != null)
                {
                    return new ChannelCreatedResponse
                    {
                        Result = false,
                        ResultMessage = "Ya existe un canal con ese mismo nombre"
                    };
                }

                var entity = _mapper.Map<Channel>(req);
                //TODO add interceptor to set DateTime
                entity.CreatedAt = DateTime.UtcNow;
                entity.CreatedBy = mentorMail;
                _context.Channels.Add(entity);

                await _context.SaveChangesAsync();

                return new ChannelCreatedResponse
                {
                    Result = true,
                    Data = _mapper.Map<ChannelResponse>(entity)
                };
            }
            catch (DbUpdateException e)
            {
                //log the exception
                return new ChannelCreatedResponse
                {
                    Result = false,
                    ResultMessage = e.Message,
                };
                throw;
            }
            catch (Exception e)
            {
                return new ChannelCreatedResponse
                {
                    Result = false,
                    ResultMessage = e.Message,
                };
            }
        }

        public async Task<IList<ChannelResponse>> GetAll(object? filter = null)
        {
            var query = _context.Channels.AsQueryable();
            //TODO aplicar filtro

            var result = _mapper.Map<List<ChannelResponse>>(
                await query
                .Include(c => c.Sessions.Where(s => s.State != Domain.Enums.Channel.CHANNEL_STATE.FINISHED))
                .ToListAsync());

            foreach (var channel in result)
            {
                foreach (var session in channel.Sessions)
                {
                    var review = await _reviewService.GetAllByUser(session.ModeratorId);
                    if (review != null) session.Reviews = review;
                }
            }
            return result;
        }

        public async Task<ChannelResponse?> GetByNameAsync(string channelName)
        {
            var query = _context.Channels.AsQueryable();
            //TODO aplicar filtro
            //TODO llamar a get all con el filtro
            var channel = await query
                .Where(x => x.Name.Equals(channelName))
                .Include(c => c.Sessions.Where(s => s.State != Domain.Enums.Channel.CHANNEL_STATE.FINISHED))
                .FirstOrDefaultAsync();

            var result = _mapper?.Map<ChannelResponse>(channel) ?? null;

            if (result == null) return result;
            foreach (var session in result.Sessions)
            {
                var review = await _reviewService.GetAllByUser(session.ModeratorId);
                if (review != null) session.Reviews = review;
            }

            return result;
        }

        public async Task<ChannelResponse?> GetByIdAsync(int channelId)
        {
            var query = _context.Channels.AsQueryable();
            //TODO aplicar filtro
            //TODO llamar a get all con el filtro
            var channel = await query
                .Where(x => x.Id.Equals(channelId))
                .Include(c => c.Sessions.Where(s => s.State != Domain.Enums.Channel.CHANNEL_STATE.FINISHED))
                .FirstOrDefaultAsync();

            var result = _mapper?.Map<ChannelResponse>(channel) ?? null;

            if (result == null) return result;
            foreach (var session in result.Sessions)
            {
                var review = await _reviewService.GetAllByUser(session.ModeratorId);
                if (review != null) session.Reviews = review;
            }

            return result;
        }
    }

}
