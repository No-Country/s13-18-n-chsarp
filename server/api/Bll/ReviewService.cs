using Api.Domain.Entities;
using Api.Domain.Interfaces.Bll;
using Api.Domain.Interfaces.Dal;
using Api.Domain.ViewModels.Reviews;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace Api.Bll
{
    public class ReviewService : IReviewService
    {
        private readonly IReviewRepository _reviewRepository;
        private readonly IMapper _mapper;

        public ReviewService(IMapper mapper, IReviewRepository reviewRepository)
        {
            _reviewRepository = reviewRepository;
            _mapper = mapper;
        }


        public async Task<bool> Create(ReviewCreateRequest request)
        {
            return await _reviewRepository.Create(request);
        }

        public async Task<ReviewListResponse> GetAllByUser(Guid userId)
        {
            try
            {
                var query = await _reviewRepository.GetAll();
                var reviews = await query
                    .Where(r => r.UserId == userId)
                    .OrderByDescending(r=>r.Date)
                    .ToListAsync();
                var average = await query
                    .Where(r => r.UserId == userId)
                    .AverageAsync(r => r.Stars);
                var averagePres = Math.Floor(average * 10) / 10;
                var response = new ReviewListResponse()
                {
                    AverageStars = Convert.ToDecimal(averagePres),
                    Reviews = _mapper.Map<List<ReviewResponse>>(reviews)
                };
                return response;
            }
            catch (Exception ex)
            {
                var response = new ReviewListResponse()
                {
                    AverageStars = 0,
                    Reviews = new List<ReviewResponse>()
                };
                return response;
            }
        }
    }
}
