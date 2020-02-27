using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RapaportApi.Models;

namespace RapaportApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiamondModelsController : ControllerBase
    {
        private readonly DiamondContext _context;

        public DiamondModelsController(DiamondContext context)
        {
            _context = context;
        }

        // GET: api/DiamondModels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DiamondModel>>> GetDiamondModels()
        {
            return await _context.DiamondModels.ToListAsync();
        }

        // GET: api/DiamondModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DiamondModel>> GetDiamondModel(string id)
        {
            var diamondModel = await _context.DiamondModels.FindAsync(id);

            if (diamondModel == null)
            {
                return NotFound();
            }

            return diamondModel;
        }

        // PUT: api/DiamondModels/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDiamondModel(string id, DiamondModel diamondModel)
        {
            if (id != diamondModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(diamondModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DiamondModelExists(id))
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

        // POST: api/DiamondModels
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<DiamondModel>> PostDiamondModel(DiamondModel diamondModel)
        {
            _context.DiamondModels.Add(diamondModel);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (DiamondModelExists(diamondModel.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction(nameof(GetDiamondModel), new { id = diamondModel.Id }, diamondModel);
        }

        // DELETE: api/DiamondModels/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DiamondModel>> DeleteDiamondModel(string id)
        {
            var diamondModel = await _context.DiamondModels.FindAsync(id);
            if (diamondModel == null)
            {
                return NotFound();
            }

            _context.DiamondModels.Remove(diamondModel);
            await _context.SaveChangesAsync();

            return diamondModel;
        }

        private bool DiamondModelExists(string id)
        {
            return _context.DiamondModels.Any(e => e.Id == id);
        }
    }
}
