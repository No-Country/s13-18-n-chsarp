using Api.Domain.Entities;
using Api.Domain.Interfaces.Dal;
using Api.Domain.ViewModels.Reviews;

namespace Api.Dal.Reviews
{
    public class ReviewRepository : IReviewRepository
    {
        private readonly Context _context;
        public ReviewRepository(Context context)
        {
            _context = context;
        }
        public async Task<bool> Create(ReviewCreateRequest request)
        {
            try
            {
                var review = new Review()
                {
                    Id = 0,
                    UserId = request.UserId,
                    SenderUser = request.SenderUser,
                    Comment = request.Comment ?? "",
                    Stars = request.Stars,
                    Date = DateTime.Now
                };
                _context.Add(review);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<IQueryable<Review>> GetAll()
        {
            try
            {
                IQueryable<Review> query = _context.Reviews;
                return query;
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
