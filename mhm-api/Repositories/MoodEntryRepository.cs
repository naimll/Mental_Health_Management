using MongoDB.Driver;
using mhm_api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using mhm_api.Models.mhm_api.Models;

namespace mhm_api.Repositories
{
    public class MoodEntryRepository
    {
        private readonly IMongoCollection<MoodEntry> _moodEntries;

        public MoodEntryRepository(IMongoDatabase database)
        {
            _moodEntries = database.GetCollection<MoodEntry>("MoodEntries");
        }

        public async Task<List<MoodEntry>> GetAllMoodEntriesAsync() =>
            await _moodEntries.Find(entry => true).ToListAsync();

        public async Task<MoodEntry> GetMoodEntryByIdAsync(string id) =>
            await _moodEntries.Find(entry => entry.Id == id).FirstOrDefaultAsync();

        public async Task CreateMoodEntryAsync(MoodEntry entry) =>
            await _moodEntries.InsertOneAsync(entry);

        public async Task UpdateMoodEntryAsync(string id, MoodEntry entry) =>
            await _moodEntries.ReplaceOneAsync(e => e.Id == id, entry);

        public async Task DeleteMoodEntryAsync(string id) =>
            await _moodEntries.DeleteOneAsync(e => e.Id == id);
    }
}
