using Azure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Final_Capstone_Venue_Site.Repositories;
using Final_Capstone_Venue_Site.Models;

namespace Final_Capstone_Venue_Site.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        private readonly IEventsRepository _eventsRepository;
        public EventsController(IEventsRepository EventsRepository)
        {
            _eventsRepository = EventsRepository;
        }







        //GET ALL
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_eventsRepository.GetAll());
        }








        //GET BY ID
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var events = _eventsRepository.GetById(id);
            if (events == null)
            {
                return NotFound();
            }
            return Ok(events);
        }











        //ADD
        [HttpPost]
        public IActionResult Event(Event events)
        {
            _eventsRepository.Add(events);
            return CreatedAtAction("Get", new { id = events.Id }, events);
        }










        //UPDATE
        [HttpPut("{id}")]
        public IActionResult Put(int id, Event events)
        {
            if (id != events.Id)
            {
                return BadRequest();
            }

            _eventsRepository.Update(events);
            return NoContent();
        }










        //DELETE
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _eventsRepository.Delete(id);
            return NoContent();
        }
    }
}























