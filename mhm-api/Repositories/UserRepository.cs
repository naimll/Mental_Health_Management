using MongoDB.Driver;
using mhm_api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace mhm_api.Repositories
{
    public class UserRepository
    {
        private readonly IMongoCollection<ApplicationUser> _users;

        public UserRepository(IMongoDatabase database)
        {
            _users = database.GetCollection<ApplicationUser>("Users");
        }

        public async Task<List<ApplicationUser>> GetAllUsersAsync() =>
            await _users.Find(user => true).ToListAsync();

        public async Task<ApplicationUser> GetUserByIdAsync(string id) =>
            await _users.Find(user => user.Id == id).FirstOrDefaultAsync();

        public async Task CreateUserAsync(ApplicationUser user) =>
            await _users.InsertOneAsync(user);

        public async Task UpdateUserAsync(string id, ApplicationUser user) =>
            await _users.ReplaceOneAsync(u => u.Id == id, user);

        public async Task DeleteUserAsync(string id) =>
            await _users.DeleteOneAsync(u => u.Id == id);
    }
}
