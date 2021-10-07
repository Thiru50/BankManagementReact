using Microsoft.EntityFrameworkCore.Migrations;

namespace BankmanagementLoanDetails.Migrations
{
    public partial class t : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PersonllLoans",
                columns: table => new
                {
                    personalLoanId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    customerId = table.Column<int>(type: "int", nullable: false),
                    firstName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    loanAmount = table.Column<int>(type: "int", nullable: false),
                    loanApplyDate = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    loanIssueDate = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    rateOfInterest = table.Column<int>(type: "int", nullable: false),
                    durationOfLoan = table.Column<int>(type: "int", nullable: false),
                    companyName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    designation = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    yourTotalExperience = table.Column<int>(type: "int", nullable: false),
                    experienceInCurrentCompany = table.Column<int>(type: "int", nullable: false),
                    annualIncome = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PersonllLoans", x => x.personalLoanId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PersonllLoans");
        }
    }
}
