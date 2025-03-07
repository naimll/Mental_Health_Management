using Microsoft.ML.Data;

namespace mhm_api.Models.ML
{
    public class MoodModelOutput
    {
        [ColumnName("PredictedLabel")]
        public string PredictedAction { get; set; }
    }
}
