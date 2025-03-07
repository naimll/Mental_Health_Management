using Microsoft.ML;
using Microsoft.ML.Data;
using System;
using System.IO;
using Microsoft.ML;
using mhm_api.Models;
using mhm_api.Models.ML;
using mhm_api.Models.mhm_api.Models;

namespace mhm_api.Services
{
    public class MoodPredictionService : IMoodPredictionService
    {
        private readonly MLContext _mlContext;
        private readonly ITransformer _model;
        private readonly PredictionEngine<MoodModelInput, MoodModelOutput> _predictionEngine;

        public MoodPredictionService()
        {
            _mlContext = new MLContext();
            //string modelPath = Path.Combine(AppContext.BaseDirectory, "Trainedmodel", "mood_model.zip");
            string modelPath = Path.Combine(
                Directory.GetCurrentDirectory(),
                "Trainedmodel",
                "mood_model.zip"
            );
            _model = _mlContext.Model.Load(modelPath, out var schema);
            _predictionEngine = _mlContext.Model.CreatePredictionEngine<MoodModelInput, MoodModelOutput>(_model);
        }

        public string PredictAction(MoodEntry moodEntry)
        {
            var modelInput = new MoodModelInput { Mood = moodEntry.Mood, Notes = moodEntry.Notes, Actions = string.Empty };
            MoodModelOutput prediction = _predictionEngine.Predict(modelInput);
            return prediction.PredictedAction;
        }
    }
}