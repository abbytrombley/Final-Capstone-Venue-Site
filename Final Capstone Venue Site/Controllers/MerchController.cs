using Azure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Final_Capstone_Venue_Site.Repositories;
using Final_Capstone_Venue_Site.Models;

namespace Final_Capstone_Venue_Site.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MerchController : ControllerBase
    {
        private readonly IMerchRepository _merchRepository;
        public MerchController(IMerchRepository merchRepository)
        {
            _merchRepository = merchRepository;
        }






        //GET ALL
        [HttpGet]
        public IActionResult Get()
        {
            
            
            return Ok(_merchRepository.GetAll());
        }






        //GET BY ID
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var merch = _merchRepository.GetById(id);
            if (merch == null)
            {
                return NotFound();
            }
            return Ok(merch);
        }







        //ADD
        [HttpPost]
        public IActionResult Post(Merch merch)
        {
            _merchRepository.Add(merch);
            return CreatedAtAction("Get", new { id = merch.Id }, merch);
        }







        //UPDATE
        [HttpPut("{id}")]
        public IActionResult Put(int id, Merch merch)
        {
            if (id != merch.Id)
            {
                return BadRequest();
            }
            _merchRepository.Update(merch);
            return NoContent();
        }







        //DELETE
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _merchRepository.Delete(id);
            return NoContent();
        }
    }
}

  

