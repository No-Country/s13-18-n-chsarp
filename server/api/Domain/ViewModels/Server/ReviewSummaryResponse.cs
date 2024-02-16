namespace Api.Domain.ViewModels.Server
{
    public class ReviewSummaryResponse
    {
        public string UserName { get; set; }
        public decimal Stars { get; set; }
        public List<string> Messages { get; set; } = new List<string>();   
    }
}
