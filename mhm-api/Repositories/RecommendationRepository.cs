using MongoDB.Driver;
using mhm_api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace mhm_api.Repositories
{
    public class RecommendationRepository
    {
        private readonly IMongoCollection<Recommendation> _recommendations;

        public RecommendationRepository(IMongoDatabase database)
        {
            _recommendations = database.GetCollection<Recommendation>("Recommendations");
        }

        public async Task<List<Recommendation>> GetAllRecommendationsAsync() =>
            await _recommendations.Find(rec => true).ToListAsync();

        public async Task<Recommendation> GetRecommendationByIdAsync(string id) =>
            await _recommendations.Find(rec => rec.Id == id).FirstOrDefaultAsync();

        public async Task CreateRecommendationAsync(Recommendation recommendation) =>
            await _recommendations.InsertOneAsync(recommendation);

        public async Task UpdateRecommendationAsync(string id, Recommendation recommendation) =>
            await _recommendations.ReplaceOneAsync(r => r.Id == id, recommendation);

        public async Task DeleteRecommendationAsync(string id) =>
            await _recommendations.DeleteOneAsync(r => r.Id == id);
    }
}
