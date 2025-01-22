using Health.Models;
using System.Collections.Generic;
using System.Linq;

namespace Health.Services
{
    public class MoodEntryService : IMoodEntryService
    {
        private readonly List<MoodEntry> _moodEntries = new List<MoodEntry>();

        public IEnumerable<MoodEntry> GetAllMoodEntries() => _moodEntries;

        public MoodEntry GetMoodEntryById(int id) => _moodEntries.FirstOrDefault(me => me.Id == id);

        public MoodEntry CreateMoodEntry(MoodEntry moodEntry)
        {
            moodEntry.Id = _moodEntries.Count + 1;
            _moodEntries.Add(moodEntry);
            return moodEntry;
        }

        public bool UpdateMoodEntry(int id, MoodEntry moodEntry)
        {
            var existingEntry = GetMoodEntryById(id);
            if (existingEntry == null) return false;

            existingEntry.Mood = moodEntry.Mood;
            existingEntry.MoodRating = moodEntry.MoodRating;
            existingEntry.Description = moodEntry.Description;
            existingEntry.ActivityCategory = moodEntry.ActivityCategory;
            existingEntry.Date = moodEntry.Date;

            return true;
        }

        public bool DeleteMoodEntry(int id)
        {
            var moodEntry = GetMoodEntryById(id);
            if (moodEntry == null) return false;

            _moodEntries.Remove(moodEntry);
            return true;
        }
    }
}