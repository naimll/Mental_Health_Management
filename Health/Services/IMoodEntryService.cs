using Health.Models;
using System.Collections.Generic;

namespace Health.Services
{
    public interface IMoodEntryService
    {
        IEnumerable<MoodEntry> GetAllMoodEntries();
        MoodEntry GetMoodEntryById(int id);
        MoodEntry CreateMoodEntry(MoodEntry moodEntry);
        bool UpdateMoodEntry(int id, MoodEntry moodEntry);
        bool DeleteMoodEntry(int id);
    }
}