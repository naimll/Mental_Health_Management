namespace mhm_api.Models
{
    using MongoDB.Bson;
    using MongoDB.Bson.Serialization.Attributes;
    using System;

    namespace mhm_api.Models
    {
        public class MoodEntry
        {
            [BsonId]
            [BsonRepresentation(BsonType.ObjectId)]
            public string Id { get; set; }

            [BsonRepresentation(BsonType.ObjectId)]
            public string UserId { get; set; }

            public string Mood { get; set; }  // p.sh. "Happy", "Sad", etj.
            public string Notes { get; set; }
            public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        }
    }

}
