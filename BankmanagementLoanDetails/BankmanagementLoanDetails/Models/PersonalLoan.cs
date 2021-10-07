using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BankmanagementLoanDetails.Models
{
    public class PersonalLoan
    {
        [Key]
        public int personalLoanId { get; set; }
        
        [Required]
        public int customerId { get; set; }

        [MaxLength(30)]
        [Required]
        public string firstName { get; set; }


        
        [Required]
        public int loanAmount { get; set; }

        [MaxLength(30)]
        [Required]
        public string loanApplyDate { get; set; }

        [MaxLength(30)]
        [Required]
        public string loanIssueDate { get; set; }

        
        [Required]
        public int rateOfInterest { get; set; }

        
        [Required]
        public int durationOfLoan { get; set; }

        [MaxLength(30)]
        [Required]
        public string companyName { get; set; }

        [MaxLength(30)]
        [Required]
        public string designation { get; set; }

        
        [Required]
        public int yourTotalExperience { get; set; }

       
        [Required]
        public int experienceInCurrentCompany { get; set; }

        
        [Required]
        public int annualIncome { get; set; }
    }
}
