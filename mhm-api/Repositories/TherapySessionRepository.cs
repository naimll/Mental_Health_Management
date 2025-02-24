using MongoDB.Driver;
using mhm_api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace mhm_api.Repositories
{
    public class TherapySessionRepository
    {
        private readonly IMongoCollection<TherapySession> _therapySessions;

        public TherapySessionRepository(IMongoDatabase database)
        {
            _therapySessions = database.GetCollection<TherapySession>("TherapySessions");
        }

        public async Task<List<TherapySession>> GetAllTherapySessionsAsync() =>
            await _therapySessions.Find(session => true).ToListAsync();

        public async Task<TherapySession> GetTherapySessionByIdAsync(string id) =>
            await _therapySessions.Find(session => session.Id == id).FirstOrDefaultAsync();

        public async Task CreateTherapySessionAsync(TherapySession session) =>
            await _therapySessions.InsertOneAsync(session);

        public async Task UpdateTherapySessionAsync(string id, TherapySession session) =>
            await _therapySessions.ReplaceOneAsync(s => s.Id == id, session);

        public async Task DeleteTherapySessionAsync(string id) =>
            await _therapySessions.DeleteOneAsync(s => s.Id == id);
    }
}
