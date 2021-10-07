using Microsoft.EntityFrameworkCore.Migrations;

namespace BankManagementApi.Migrations
{
    public partial class t : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UserDetails",
                columns: table => new
                {
                    customerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "528371, 1"),
                    accountNumber = table.Column<long>(type: "bigint", nullable: false),
                    firstName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    lastName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    password = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    gender = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    guardianType = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    guardianName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    address = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    citizenship = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    state = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    country = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    email = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    maritalStatus = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    contactNumber = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    dob = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    registrationDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    accountType = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    branchName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    citizenStatus = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    ida = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    documentType = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    idn = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    accHolderName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    accHolderAddress = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    accHolderNumber = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserDetails", x => x.customerId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserDetails");
        }
    }
}
