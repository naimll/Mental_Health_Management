using Microsoft.AspNetCore.Mvc;
using mhm_api.Models;
using mhm_api.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;
using mhm_api.Models.mhm_api.Models;
using mhm_api.Services;

namespace mhm_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MoodEntriesController : ControllerBase
    {
        private readonly MoodEntryRepository _moodEntryRepository;
        private readonly IMoodPredictionService _moodPredictionService;

        public MoodEntriesController(MoodEntryRepository moodEntryRepository, IMoodPredictionService moodPredictionService)
        {
            _moodEntryRepository = moodEntryRepository;
            _moodPredictionService = moodPredictionService;
        }

        [HttpGet]
        public async Task<ActionResult<List<MoodEntry>>> GetAllMoodEntries()
        {
            var moodEntries = await _moodEntryRepository.GetAllMoodEntriesAsync();
            return Ok(moodEntries);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MoodEntry>> GetMoodEntry(string id)
        {
            var moodEntry = await _moodEntryRepository.GetMoodEntryByIdAsync(id);
            if (moodEntry == null) return NotFound();
            return Ok(moodEntry);
        }
        [HttpPost("create")]
        public IActionResult CreateMoodEntry([FromBody] MoodEntry moodEntry)
        {
            var action = _moodPredictionService.PredictAction(moodEntry);
            return Ok(new { MoodEntry = moodEntry, RecommendedAction = action });
        }
        //[HttpPost]
        //public async Task<IActionResult> CreateMoodEntry([FromBody] MoodEntry moodEntry)
        //{
        //    await _moodEntryRepository.CreateMoodEntryAsync(moodEntry);
        //    return CreatedAtAction(nameof(GetMoodEntry), new { id = moodEntry.Id }, moodEntry);
        //}

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMoodEntry(string id, [FromBody] MoodEntry moodEntry)
        {
            var existingMoodEntry = await _moodEntryRepository.GetMoodEntryByIdAsync(id);
            if (existingMoodEntry == null) return NotFound();

            await _moodEntryRepository.UpdateMoodEntryAsync(id, moodEntry);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMoodEntry(string id)
        {
            var existingMoodEntry = await _moodEntryRepository.GetMoodEntryByIdAsync(id);
            if (existingMoodEntry == null) return NotFound();

            await _moodEntryRepository.DeleteMoodEntryAsync(id);
            return NoContent();
        }
    }
}
