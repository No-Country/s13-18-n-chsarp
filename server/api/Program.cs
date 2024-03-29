using Api.Bll;
using Api.Controllers.Hubs;
using Api.Dal;
using Api.Dal.Auth;
using Api.Dal.Auth.Seeds;
using Api.Dal.Reviews;
using Api.Dal.Server;
using Api.Domain.Entities;
using Api.Domain.Extensions;
using Api.Domain.HubModels;
using Api.Domain.Interfaces.Bll;
using Api.Domain.Interfaces.Dal;
using Api.Domain.Utilities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionString = builder
    .Configuration
    .GetConnectionString("DefaultConnection");

builder.Services
    .AddScoped<IAuthenticationRepository, AuthenticationRepository>()
    .AddDbContext<Context>(options => options.UseSqlServer(connectionString));

builder.Services.AddAutoMapper(typeof(AutomapperProfile));

// Add SignalR
builder.Services.AddSignalR();
builder.Services.AddSingleton<SharedDB>();

// Dependency inyection

builder.Services.AddScoped<ISessionRepository, SessionRepository>();
builder.Services.AddScoped<ISessionService, SessionService>();

builder.Services.AddScoped<IMessageRepository, MessageRepository>();
builder.Services.AddScoped<IMessageService, MessageService>();

builder.Services.AddScoped<ChannelService>();

builder.Services.AddScoped<CloudinaryService>();

builder.Services.AddScoped<IConnectionUserRepository, ConnectionUserRepository>();
builder.Services.AddScoped<IConnectionUserService, ConnectionUserService>();

builder.Services.AddScoped<IReviewRepository, ReviewRepository>();
builder.Services.AddScoped<IReviewService, ReviewService>();

#region Auth  
//TODO needs refactor
builder.Services.AddIdentity<User, IdentityRole>(options =>
{
    options.User.RequireUniqueEmail = true;
    options.Password.RequireNonAlphanumeric = false;
})
// Adding suport for roles
    .AddRoles<IdentityRole>()
    .AddRoleManager<RoleManager<IdentityRole>>()
    .AddEntityFrameworkStores<Context>()
    .AddDefaultTokenProviders();

// Jwt Config
builder.Services
    .AddHttpContextAccessor()
    .AddAuthorization(options =>
    {
        options.AddPolicy("ElevatedRights", policy =>
            policy.RequireRole(Role.Moderator));
        options.AddPolicy("StandardRights", policy =>
            policy.RequireRole(Role.User, Role.User));
    })
    .AddAuthentication(options =>
    {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
    })
    .AddJwtBearer(options =>
    {
        options.SaveToken = true;
        options.RequireHttpsMetadata = true;
        options.TokenValidationParameters = new TokenValidationParameters()
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["JWT:Issuer"],
            ValidAudience = builder.Configuration["JWT:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:Key"])),
            RoleClaimType = "Role"
        };
        options.Events = new JwtBearerEvents()
        {
            OnMessageReceived = context =>
            {
                if (context.Request.Path.ToString().StartsWith("/chat"))
                    context.Token = context.Request.Query["access_token"];
                return Task.CompletedTask;
            },
        };
    });
#endregion

builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header

    });
    options.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type  = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[]{}
        }
    });
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.Configure<CloudinarySetting>(builder.Configuration.GetSection("CloudinarySettings"));

builder.Services.AddCors(policyBuilder =>
    policyBuilder.AddDefaultPolicy(policy =>
        policy
            .WithOrigins("https://contanos.vercel.app", "http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials()
            )
);

var app = builder.Build();
app.UseCors();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
app.UseSwagger();
app.UseSwaggerUI();
//}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapHub<ChatHub>("/chat");

// Adding seed
//TODO refactor 
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    await AuthSeeds.Seed(services);
}
app.Run();
