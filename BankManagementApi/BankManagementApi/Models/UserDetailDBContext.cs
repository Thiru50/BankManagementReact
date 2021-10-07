using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankManagementApi.Models
{
    public class UserDetailDBContext : DbContext
    {
        public UserDetailDBContext(DbContextOptions<UserDetailDBContext> options) : base(options)
        {
            //Empty  
        }

        public DbSet<UserDetail> UserDetails { get; set; }
    }
}
