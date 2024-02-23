using Api.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata;

namespace Api.Dal.Server.Seeds
{
    public static class ChannelSeeds
    {
        public static  void Seed(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Channel>().HasData(new Channel { Name="Bienestar emocional", Description = "Este grupo se centra en el bienestar general de la salud mental y emocional, ofreciendo apoyo para lidiar con la ansiedad, la depresión, el estrés y otros desafíos emocionales" , CreatedAt=DateTime.UtcNow,CreatedBy="Admin",Id=1 });

            modelBuilder.Entity<Channel>().HasData(new Channel { Name = "Relaciones saludables", Description = "Este grupo se enfoca en promover relaciones interpersonales saludables y positivas, brindando apoyo para resolver conflictos familiares, problemas de pareja y mejorar la comunicación.", CreatedAt = DateTime.UtcNow, CreatedBy = "Admin", Id = 2 });

            modelBuilder.Entity<Channel>().HasData(new Channel { Name = "Crecimiento personal y autoaceptación", Description = "Este grupo ofrece un espacio seguro para explorar el crecimiento personal, la autoestima y la autoaceptación, ayudando a superar la vergüenza, la culpa y fomentar una mayor confianza en uno mismo .", CreatedAt = DateTime.UtcNow, CreatedBy = "Admin", Id = 3 });

            modelBuilder.Entity<Channel>().HasData(new Channel { Name = "Equilibrio y recuperación", Description = "Este grupo está diseñado para apoyar a aquellos que luchan con adicciones y comportamientos adversos, ofreciendo un espacio de recuperación, apoyo mutuo y aliento para buscar un equilibrio saludable en la vida.", CreatedAt = DateTime.UtcNow, CreatedBy = "Admin", Id = 4 });

        }
        
    }
}
