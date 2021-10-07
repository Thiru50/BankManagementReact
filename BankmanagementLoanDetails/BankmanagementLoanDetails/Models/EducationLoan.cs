using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BankmanagementLoanDetails.Models
{
    public class EducationLoan
    {
        [Key]
        public int educationalLoanId { get; set; }
        [Required]
        public int customerId { get; set; }

        [Required]
        [MaxLength(30)]
        public string firstName { get; set; }

        [MaxLength(30)]
        [Required]
        public string lastName { get; set; }

        
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

        
        [Required]
        public int courseFee { get; set; }

        [MaxLength(30)]
        [Required]
        public string courseName { get; set; }

        [MaxLength(30)]
        [Required]
        public string fatherName { get; set; }

        [MaxLength(30)]
        [Required]
        public string fatherOccupation { get; set; }

        
        [Required]
        public int fathertotalExperience { get; set; }

        
        [Required]
        public int fatherExperienceInCurrentCompany { get; set; }

        
        [Required]
        public int rationCardNumber { get; set; }

        
        [Required]
        public int annualIncome { get; set; }

    }
}
