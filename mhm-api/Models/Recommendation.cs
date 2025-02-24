using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace mhm_api.Models
{
    public class Recommendation
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonRepresentation(BsonType.ObjectId)]
        public string UserId { get; set; }
        public string Suggestion { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
