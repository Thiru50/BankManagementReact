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
    public class PersonalLoansController : ControllerBase
    {
        private readonly PersonalLoanDBContext _context;

        public PersonalLoansController(PersonalLoanDBContext context)
        {
            _context = context;
        }

        // GET: api/PersonalLoans
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PersonalLoan>>> GetPersonllLoans()
        {
            return await _context.PersonllLoans.ToListAsync();
        }

        // GET: api/PersonalLoans/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PersonalLoan>> GetPersonalLoan(int id)
        {
            var personalLoan = await _context.PersonllLoans.FindAsync(id);

            if (personalLoan == null)
            {
                return NotFound();
            }

            return personalLoan;
        }

        // PUT: api/PersonalLoans/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPersonalLoan(int id, PersonalLoan personalLoan)
        {
            if (id != personalLoan.personalLoanId)
            {
                return BadRequest();
            }

            _context.Entry(personalLoan).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonalLoanExists(id))
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

        // POST: api/PersonalLoans
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PersonalLoan>> PostPersonalLoan(PersonalLoan personalLoan)
        {
            _context.PersonllLoans.Add(personalLoan);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPersonalLoan", new { id = personalLoan.personalLoanId }, personalLoan);
        }

        // DELETE: api/PersonalLoans/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePersonalLoan(int id)
        {
            var personalLoan = await _context.PersonllLoans.FindAsync(id);
            if (personalLoan == null)
            {
                return NotFound();
            }

            _context.PersonllLoans.Remove(personalLoan);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PersonalLoanExists(int id)
        {
            return _context.PersonllLoans.Any(e => e.personalLoanId == id);
        }
    }
}
