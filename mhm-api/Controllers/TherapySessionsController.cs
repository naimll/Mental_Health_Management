using Microsoft.AspNetCore.Mvc;
using mhm_api.Models;
using mhm_api.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace mhm_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TherapySessionsController : ControllerBase
    {
        private readonly TherapySessionRepository _therapySessionRepository;

        public TherapySessionsController(TherapySessionRepository therapySessionRepository)
        {
            _therapySessionRepository = therapySessionRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<TherapySession>>> GetAllTherapySessions()
        {
            var sessions = await _therapySessionRepository.GetAllTherapySessionsAsync();
            return Ok(sessions);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TherapySession>> GetTherapySession(string id)
        {
            var session = await _therapySessionRepository.GetTherapySessionByIdAsync(id);
            if (session == null) return NotFound();
            return Ok(session);
        }

        [HttpPost]
        public async Task<IActionResult> CreateTherapySession([FromBody] TherapySession session)
        {
            await _therapySessionRepository.CreateTherapySessionAsync(session);
            return CreatedAtAction(nameof(GetTherapySession), new { id = session.Id }, session);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTherapySession(string id, [FromBody] TherapySession session)
        {
            var existingSession = await _therapySessionRepository.GetTherapySessionByIdAsync(id);
            if (existingSession == null) return NotFound();

            await _therapySessionRepository.UpdateTherapySessionAsync(id, session);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTherapySession(string id)
        {
            var existingSession = await _therapySessionRepository.GetTherapySessionByIdAsync(id);
            if (existingSession == null) return NotFound();

            await _therapySessionRepository.DeleteTherapySessionAsync(id);
            return NoContent();
        }
    }
}
