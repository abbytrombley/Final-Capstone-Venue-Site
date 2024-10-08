using Final_Capstone_Venue_Site.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Final_Capstone_Venue_Site.Repositories;

namespace Final_Capstone_Venue_Site.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUsersRepository _usersRepository;
        public UsersController(IUsersRepository usersRepository)
        {
            _usersRepository = usersRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_usersRepository.GetAll());
        }

        [HttpGet("GetUserByDisplayName")]
        public IActionResult GetByDisplayName(string displayName)
        {
            var user = _usersRepository.GetUserByDisplayName(displayName);

            if (displayName == null || user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }
        [HttpPost]
        public IActionResult Post(Users user)
        {
            _usersRepository.Add(user);
            return CreatedAtAction("Get", new { id = user.Id }, user);
        }
    }
}
