using Api.Domain.Entities;
using Api.Domain.ViewModels.Reviews;

namespace Api.Domain.Interfaces.Dal
{
    public interface IReviewRepository
    {
        Task<bool> Create(ReviewCreateRequest request);
        Task<IQueryable<Review>> GetAll();
    }
}
