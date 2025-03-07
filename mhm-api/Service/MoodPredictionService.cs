using Microsoft.ML;
using Microsoft.ML.Data;
using System;
using System.IO;
using mhm_api.Models;
using mhm_api.Models.mhm_api.Models;

namespace mhm_api.Services
{
    public class MoodPredictionService
    {
        private readonly PredictionEngine<MoodEntry, MoodPredictionResult> _predictionEngine;
        private static readonly string ModelPath = "mood_model.zip";

        public MoodPredictionService()
        {
            var mlContext = new MLContext();
            ITransformer trainedModel = mlContext.Model.Load(ModelPath, out var modelInputSchema);
            _predictionEngine = mlContext.Model.CreatePredictionEngine<MoodEntry, MoodPredictionResult>(trainedModel);
        }

        public MoodPredictionResult PredictMood(MoodEntry input)
        {
            return _predictionEngine.Predict(input);
        }
    }
}