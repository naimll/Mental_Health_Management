using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace mhm_api.Models
{
    public class ActivityTracking
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonRepresentation(BsonType.ObjectId)]
        public string UserId { get; set; }
        public string ActivityType { get; set; } // p.sh. "Meditation", "Exercise", "Sleep"
        public string Details { get; set; }
        public DateTime Timestamp { get; set; }
    }
}
