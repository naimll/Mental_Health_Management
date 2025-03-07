using mhm_api.Models;
using mhm_api.Models.mhm_api.Models;

namespace mhm_api.Services
{
    public interface IMoodPredictionService
    {
        string PredictAction(MoodEntry moodEntry);
    }
}
