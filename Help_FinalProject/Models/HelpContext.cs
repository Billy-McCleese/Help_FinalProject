using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Help_FinalProject.Models;

public partial class HelpContext : DbContext
{
    public HelpContext()
    {
    }

    public HelpContext(DbContextOptions<HelpContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Favorite> Favorites { get; set; }

    public virtual DbSet<Review> Reviews { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            string connectionString = $"Server={Secret.Server};Initial Catalog=HELP;Persist Security Info=False;User ID={Secret.UserName};Password={Secret.Password};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            optionsBuilder.UseSqlServer(connectionString);
        }
    }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Favorite>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Favorite__3214EC0795A6ADD3");

            entity.ToTable("Favorite");

            entity.Property(e => e.CompleteAddress).HasMaxLength(1000);
            entity.Property(e => e.UserId).HasColumnName("User_Id");

            entity.HasOne(d => d.User).WithMany(p => p.Favorites)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Favorite__User_I__4D94879B");
        });

        modelBuilder.Entity<Review>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Review__3214EC079C725CA5");

            entity.ToTable("Review");

            entity.Property(e => e.Category).HasMaxLength(100);
            entity.Property(e => e.CompleteAddress).HasMaxLength(1000);
            entity.Property(e => e.Detail).HasMaxLength(3000);
            entity.Property(e => e.PropertyAdress).HasMaxLength(500);
            entity.Property(e => e.PropertyCity).HasMaxLength(500);
            entity.Property(e => e.PropertyState).HasMaxLength(50);
            entity.Property(e => e.Reporter).HasMaxLength(100);
            entity.Property(e => e.Title).HasMaxLength(500);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__User__3214EC0756071D52");

            entity.ToTable("User");

            entity.Property(e => e.Name).HasMaxLength(100);
            entity.Property(e => e.Password).HasMaxLength(20);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
