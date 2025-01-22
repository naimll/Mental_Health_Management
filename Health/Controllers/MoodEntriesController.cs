using Microsoft.AspNetCore.Mvc;
using Health.Services;
using Health.Models;

namespace Health.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MoodEntriesController : ControllerBase
    {
        private readonly IMoodEntryService _moodEntryService;

        public MoodEntriesController(IMoodEntryService moodEntryService)
        {
            _moodEntryService = moodEntryService;
        }

        [HttpGet]
        public IActionResult GetAllMoodEntries()
        {
            var moodEntries = _moodEntryService.GetAllMoodEntries();
            return Ok(moodEntries);
        }

        [HttpGet("{id}")]
        public IActionResult GetMoodEntryById(int id)
        {
            var moodEntry = _moodEntryService.GetMoodEntryById(id);
            if (moodEntry == null) return NotFound();
            return Ok(moodEntry);
        }

        [HttpPost]
        public IActionResult CreateMoodEntry([FromBody] MoodEntry moodEntry)
        {
            var createdMoodEntry = _moodEntryService.CreateMoodEntry(moodEntry);
            return CreatedAtAction(nameof(GetMoodEntryById), new { id = createdMoodEntry.Id }, createdMoodEntry);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateMoodEntry(int id, [FromBody] MoodEntry moodEntry)
        {
            if (_moodEntryService.UpdateMoodEntry(id, moodEntry))
                return NoContent();

            return NotFound();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteMoodEntry(int id)
        {
            if (_moodEntryService.DeleteMoodEntry(id))
                return NoContent();

            return NotFound();
        }
    }
}