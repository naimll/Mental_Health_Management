var builder = WebApplication.CreateBuilder(args);

// Shtoni sh�rbimet e nevojshme
builder.Services.AddControllers();

var app = builder.Build();

// Konfiguroni endpoint-et
app.MapControllers();

app.Run();