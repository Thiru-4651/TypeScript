using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography.X509Certificates;


namespace APIForMedicalStore.Controllers
{
    public class ApplicationDBContext : DbContext, IDisposable
{
    public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
    {
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
    }
    public DbSet<UserDetails> users{get;set;}
    public DbSet<MedicineDetails> medicines{get;set;}
    public DbSet<OrderDetails> orders{get;set;}
}
}