using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace mhm_api.Models
{
    public class TherapySession
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonRepresentation(BsonType.ObjectId)]
        public string UserId { get; set; }

        [BsonRepresentation(BsonType.ObjectId)]
        public string TherapistId { get; set; }
        public DateTime SessionDate { get; set; }
        public string Notes { get; set; }
        public bool Completed { get; set; }
    }
}
