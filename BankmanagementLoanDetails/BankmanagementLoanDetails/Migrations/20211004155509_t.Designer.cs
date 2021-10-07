﻿// <auto-generated />
using BankmanagementLoanDetails.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BankmanagementLoanDetails.Migrations
{
    [DbContext(typeof(PersonalLoanDBContext))]
    [Migration("20211004155509_t")]
    partial class t
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.10")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("BankmanagementLoanDetails.Models.PersonalLoan", b =>
                {
                    b.Property<int>("personalLoanId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("annualIncome")
                        .HasColumnType("int");

                    b.Property<string>("companyName")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<int>("customerId")
                        .HasColumnType("int");

                    b.Property<string>("designation")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<int>("durationOfLoan")
                        .HasColumnType("int");

                    b.Property<int>("experienceInCurrentCompany")
                        .HasColumnType("int");

                    b.Property<string>("firstName")
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

                    b.Property<int>("yourTotalExperience")
                        .HasColumnType("int");

                    b.HasKey("personalLoanId");

                    b.ToTable("PersonllLoans");
                });
#pragma warning restore 612, 618
        }
    }
}