using Microsoft.ML.Data;

namespace mhm_api.Models.ML
{
    public class MoodModelInput
    {
        [LoadColumn(2)]
        public string Mood { get; set; }

        [LoadColumn(3)]
        public string Notes { get; set; }

        [LoadColumn(5)]
        public string Actions { get; set; }
    }
}
