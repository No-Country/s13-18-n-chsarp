using Api.Domain.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Api.Dal;

public class Context : IdentityDbContext<User>
{
    public Context(DbContextOptions<Context> options) : base(options)
    {
        Database.EnsureCreated();
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
       base.OnModelCreating(builder);
    }

    public DbSet<Session> Sessions { get; set; }
    public DbSet<Channel> Channels { get; set; }
    public DbSet<Message> Messages { get; set; }
   
}