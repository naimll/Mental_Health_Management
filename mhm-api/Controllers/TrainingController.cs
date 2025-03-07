using System;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.ML;
using mhm_api.Models.ML;

namespace mhm_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TrainingController : ControllerBase
    {
        [HttpPost("train")]
        public IActionResult TrainModel()
        {
            try
            {
                var mlContext = new MLContext();
                var currentDirectory = Directory.GetCurrentDirectory();
                //var dataPath = Path.Combine(currentDirectory, "mood_entries_updated.csv");
                var dataPath = Path.Combine(
                Directory.GetCurrentDirectory(),
                "Trainedmodel",
                "mood_entries_updated.csv"
            );
                var dataView = mlContext.Data.LoadFromTextFile<MoodModelInput>(
                    path: dataPath,
                    hasHeader: true,
                    separatorChar: ',');

                var pipeline = mlContext.Transforms.Conversion
                .MapValueToKey("Label", "Actions")
                .Append(mlContext.Transforms.Text.FeaturizeText("MoodFeats", "Mood"))
                .Append(mlContext.Transforms.Text.FeaturizeText("NotesFeats", "Notes"))
                .Append(mlContext.Transforms.Concatenate("Features", "MoodFeats", "NotesFeats"))
                .Append(mlContext.MulticlassClassification.Trainers
                    .SdcaMaximumEntropy(labelColumnName: "Label", featureColumnName: "Features"))
                .Append(mlContext.Transforms.Conversion
                    .MapKeyToValue("PredictedLabel", "PredictedLabel"));


                var model = pipeline.Fit(dataView);

                //var modelPath = Path.Combine(currentDirectory, "TrainedModel", "mood_model.zip");
                var modelPath = Path.Combine(
                Directory.GetCurrentDirectory(),
                "Trainedmodel",
                "mood_model.zip"
            );
                Directory.CreateDirectory(Path.GetDirectoryName(modelPath));
                mlContext.Model.Save(model, dataView.Schema, modelPath);

                return Ok(new { message = "Model trained and saved successfully.", modelPath });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }
        }
    }
}
