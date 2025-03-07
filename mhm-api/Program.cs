using mhm_api.Repositories;
using mhm_api.Service;
using mhm_api.Services;
using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var mongoConnectionString = builder.Configuration["MongoDBSettings:ConnectionString"];
var mongoDatabaseName = builder.Configuration["MongoDBSettings:DatabaseName"];

var mongoClient = new MongoClient(mongoConnectionString);
var mongoDatabase = mongoClient.GetDatabase(mongoDatabaseName);

builder.Services.AddSingleton<IMongoClient>(mongoClient);
builder.Services.AddSingleton<IMongoDatabase>(mongoDatabase);
builder.Services.AddSingleton<MongoDbService>();
builder.Services.AddSingleton<UserRepository>();
builder.Services.AddSingleton<MoodEntryRepository>();
builder.Services.AddSingleton<TherapySessionRepository>();
builder.Services.AddSingleton<RecommendationRepository>();
builder.Services.AddSingleton<ChatMessageRepository>();
builder.Services.AddSingleton<IMoodPredictionService, MoodPredictionService>();


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
