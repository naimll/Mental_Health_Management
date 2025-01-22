var builder = WebApplication.CreateBuilder(args);

// Shtoni shërbimet e nevojshme
builder.Services.AddControllers();

var app = builder.Build();

// Konfiguroni endpoint-et
app.MapControllers();

app.Run();