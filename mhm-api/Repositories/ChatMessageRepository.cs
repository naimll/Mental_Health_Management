using MongoDB.Driver;
using mhm_api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace mhm_api.Repositories
{
    public class ChatMessageRepository
    {
        private readonly IMongoCollection<ChatMessage> _chatMessages;

        public ChatMessageRepository(IMongoDatabase database)
        {
            _chatMessages = database.GetCollection<ChatMessage>("ChatMessages");
        }

        public async Task<List<ChatMessage>> GetAllMessagesAsync() =>
            await _chatMessages.Find(msg => true).ToListAsync();

        public async Task<ChatMessage> GetMessageByIdAsync(string id) =>
            await _chatMessages.Find(msg => msg.Id == id).FirstOrDefaultAsync();

        public async Task CreateMessageAsync(ChatMessage message) =>
            await _chatMessages.InsertOneAsync(message);

        public async Task DeleteMessageAsync(string id) =>
            await _chatMessages.DeleteOneAsync(msg => msg.Id == id);
    }
}
