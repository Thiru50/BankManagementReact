﻿// <auto-generated />
using BankmanagementLoanDetails.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BankmanagementLoanDetails.Migrations.EducationLoanDB
{
    [DbContext(typeof(EducationLoanDBContext))]
    partial class EducationLoanDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.10")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("BankmanagementLoanDetails.Models.EducationLoan", b =>
                {
                    b.Property<int>("educationalLoanId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("annualIncome")
                        .HasColumnType("int");

                    b.Property<int>("courseFee")
                        .HasColumnType("int");

                    b.Property<string>("courseName")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<int>("customerId")
                        .HasColumnType("int");

                    b.Property<int>("durationOfLoan")
                        .HasColumnType("int");

                    b.Property<int>("fatherExperienceInCurrentCompany")
                        .HasColumnType("int");

                    b.Property<string>("fatherName")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("fatherOccupation")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<int>("fathertotalExperience")
                        .HasColumnType("int");

                    b.Property<string>("firstName")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("lastName")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<int>("loanAmount")
                        .HasColumnType("int");

                    b.Property<string>("loanApplyDate")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("loanIssueDate")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<int>("rateOfInterest")
                        .HasColumnType("int");

                    b.Property<int>("rationCardNumber")
                        .HasColumnType("int");

                    b.HasKey("educationalLoanId");

                    b.ToTable("EducationLoans");
                });
#pragma warning restore 612, 618
        }
    }
}