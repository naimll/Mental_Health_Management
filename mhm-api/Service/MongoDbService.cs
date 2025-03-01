﻿using MongoDB.Driver;

namespace mhm_api.Service
{
    public class MongoDbService
    {
        private readonly IMongoDatabase _database;

        public MongoDbService(IMongoDatabase database)
        {
            _database = database;
        }

        public IMongoCollection<T> GetCollection<T>(string collectionName)
        {
            return _database.GetCollection<T>(collectionName);
        }
    }
}
