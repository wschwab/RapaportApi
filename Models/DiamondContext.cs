using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace RapaportApi.Models
{
    public class DiamondContext : DbContext
    {
        public DiamondContext(DbContextOptions<DiamondContext> options)
            : base(options)
        {
        }
        
        public DbSet<DiamondModel> DiamondModels { get; set; }

    }
}
