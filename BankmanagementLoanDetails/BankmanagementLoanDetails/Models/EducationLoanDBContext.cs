using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankmanagementLoanDetails.Models
{
    public class EducationLoanDBContext : DbContext
    {
        public EducationLoanDBContext(DbContextOptions<EducationLoanDBContext> options) : base(options)
        {
            //Empty  
        }

        public DbSet<EducationLoan> EducationLoans { get; set; }
    }

}
