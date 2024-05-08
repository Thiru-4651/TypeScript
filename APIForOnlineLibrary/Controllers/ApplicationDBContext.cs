using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

using System.Threading.Tasks;

namespace APIForOnlineLibrary.Controllers
{
    	public class ApplicationDBContext : DbContext, IDisposable
	{
	    public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
	    {
	        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
	    }
        public DbSet<UserDetails>users{get;set;}
        public DbSet<BookDetails>books{get;set;}
        public DbSet<BorrowDetails>borrows{get;set;}
        
    }

}