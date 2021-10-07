using Microsoft.EntityFrameworkCore.Migrations;

namespace BankmanagementLoanDetails.Migrations.EducationLoanDB
{
    public partial class a : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EducationLoans",
                columns: table => new
                {
                    educationalLoanId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    customerId = table.Column<int>(type: "int", nullable: false),
                    firstName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    lastName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    loanAmount = table.Column<int>(type: "int", nullable: false),
                    loanApplyDate = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    loanIssueDate = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    rateOfInterest = table.Column<int>(type: "int", nullable: false),
                    durationOfLoan = table.Column<int>(type: "int", nullable: false),
                    courseFee = table.Column<int>(type: "int", nullable: false),
                    courseName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    fatherName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    fatherOccupation = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    fathertotalExperience = table.Column<int>(type: "int", nullable: false),
                    fatherExperienceInCurrentCompany = table.Column<int>(type: "int", nullable: false),
                    rationCardNumber = table.Column<int>(type: "int", nullable: false),
                    annualIncome = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EducationLoans", x => x.educationalLoanId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EducationLoans");
        }
    }
}
