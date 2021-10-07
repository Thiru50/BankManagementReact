using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BankmanagementLoanDetails.Models;

namespace BankmanagementLoanDetails.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EducationLoansController : ControllerBase
    {
        private readonly EducationLoanDBContext _context;

        public EducationLoansController(EducationLoanDBContext context)
        {
            _context = context;
        }

        // GET: api/EducationLoans
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EducationLoan>>> GetEducationLoans()
        {
            return await _context.EducationLoans.ToListAsync();
        }

        // GET: api/EducationLoans/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EducationLoan>> GetEducationLoan(int id)
        {
            var educationLoan = await _context.EducationLoans.FindAsync(id);

            if (educationLoan == null)
            {
                return NotFound();
            }

            return educationLoan;
        }

        // PUT: api/EducationLoans/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEducationLoan(int id, EducationLoan educationLoan)
        {
            if (id != educationLoan.educationalLoanId)
            {
                return BadRequest();
            }

            _context.Entry(educationLoan).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EducationLoanExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/EducationLoans
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EducationLoan>> PostEducationLoan(EducationLoan educationLoan)
        {
            _context.EducationLoans.Add(educationLoan);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEducationLoan", new { id = educationLoan.educationalLoanId }, educationLoan);
        }

        // DELETE: api/EducationLoans/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEducationLoan(int id)
        {
            var educationLoan = await _context.EducationLoans.FindAsync(id);
            if (educationLoan == null)
            {
                return NotFound();
            }

            _context.EducationLoans.Remove(educationLoan);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EducationLoanExists(int id)
        {
            return _context.EducationLoans.Any(e => e.educationalLoanId == id);
        }
    }
}
