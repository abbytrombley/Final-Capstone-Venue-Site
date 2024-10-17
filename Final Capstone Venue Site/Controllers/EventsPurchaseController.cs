using Final_Capstone_Venue_Site.Models;
using Final_Capstone_Venue_Site.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Final_Capstone_Venue_Site.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsPurchaseController : ControllerBase
    {
        private readonly IEventsPurchaseRepository _eventsPurchaseRepository;
        public EventsPurchaseController(IEventsPurchaseRepository EventsPurchaseRepository)
        {
            _eventsPurchaseRepository = EventsPurchaseRepository;
        }







        //GET ALL
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_eventsPurchaseRepository.GetAll());
        }









        //ADD
        [HttpPost("purchase")]
        public IActionResult Purchase([FromBody] EventPurchase eventPurchase)
        {
            if (eventPurchase == null)
            {
                return BadRequest("Invalid purchase data.");
            }

            _eventsPurchaseRepository.Add(eventPurchase);
            return Ok(new { message = "Purchase successful!" });
        }











      /*  [HttpPost]
        public IActionResult EventPurchase(EventPurchase eventPurchase)
        {
            _eventsPurchaseRepository.Add(eventPurchase);
            return CreatedAtAction("Get", new { id = eventPurchase.Id }, eventPurchase);
        }*/


    }
}
