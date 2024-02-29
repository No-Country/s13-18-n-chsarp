using Api.Dal.Server.Seeds;
using Api.Domain.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Api.Dal;

public class Context : IdentityDbContext<User>
{
    public Context(DbContextOptions<Context> options) : base(options)
    {
        Database.EnsureCreated();
        
        Database.Migrate();
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        ChannelSeeds.Seed(builder);
       base.OnModelCreating(builder);
    }

    public DbSet<Session> Sessions { get; set; }
    public DbSet<Channel> Channels { get; set; }
    public DbSet<Message> Messages { get; set; }
    public DbSet<ConnectionUser> ConnectionUsers { get; set; }
    public DbSet<Review> Reviews { get; set; }
   
}