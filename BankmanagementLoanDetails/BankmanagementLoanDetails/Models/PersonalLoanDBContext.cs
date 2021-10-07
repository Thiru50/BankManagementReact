using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankmanagementLoanDetails.Models
{
    public class PersonalLoanDBContext : DbContext
    {
        public PersonalLoanDBContext() { }
        public PersonalLoanDBContext(DbContextOptions<PersonalLoanDBContext> options) : base(options)
        {
            
    }

        public DbSet<PersonalLoan> PersonllLoans { get; set; }
    }

}
