using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BankManagementApi.Models
{
    public class UserDetail                                                               
    {
        [Key]
        public int customerId { get; set; }

        [Required]
        public long accountNumber { get; set; }

        [Required]
        [MaxLength(30)]
        public string firstName { get; set; }

        [Required]
        [MaxLength(30)]
        public string lastName { get; set; }

        [Required]
        [MaxLength(30)]
        public string password { get; set; }

        [Required]
        [MaxLength(30)]
        public string gender { get; set; }

        [Required]
        [MaxLength(30)]
        public string guardianType { get; set; }

        [Required]
        [MaxLength(30)]
        public string guardianName { get; set; }

        [Required]
        [MaxLength(70)]
        public string address { get; set; }

        [Required]
        [MaxLength(30)]
        public string citizenship { get; set; }

        [Required]
        [MaxLength(30)]
        public string state { get; set; }

        [Required]
        [MaxLength(30)]
        public string country { get; set; }

        [Required]
        [MaxLength(30)]
        public string email { get; set; }

        [Required]
        [MaxLength(30)]
        public string maritalStatus { get; set; }

        [Required]
        [MaxLength(30)]
        public string contactNumber { get; set; }
         
        [Required]
        [MaxLength(30)]
        public string dob { get; set; }


        [Required]
        public string registrationDate { get; set; }

        [Required]
        [MaxLength(30)]
        public string accountType { get; set; }

        [Required]
        [MaxLength(30)]
        public string branchName { get; set; }

        [Required]
        [MaxLength(30)]
        public string citizenStatus { get; set; }

        [Required]
        [MaxLength(30)]
        public string ida { get; set; }

        [Required]
        [MaxLength(30)]
        public string documentType { get; set; }

        [Required]
        [MaxLength(30)]
        public string idn { get; set; }

        [Required]
        [MaxLength(30)]
        public string accHolderName { get; set; }

        [Required]
        [MaxLength(30)]
        public string accHolderAddress { get; set; }

        [Required]
        [MaxLength(30)]
        public string accHolderNumber { get; set; }

    }
}
