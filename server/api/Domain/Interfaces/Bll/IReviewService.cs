using Api.Domain.ViewModels.Reviews;

namespace Api.Domain.Interfaces.Bll
{
    public interface IReviewService
    {
        Task<bool> Create(ReviewCreateRequest request);
        Task<ReviewListResponse> GetAllByUser(Guid userId);
    }
}
