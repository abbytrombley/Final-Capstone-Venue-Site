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







        //GET ALL
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_usersRepository.GetAll());
        }









        //GET BY ID
        [HttpGet("GetUserById/{id}")]
        public IActionResult GetUsersById(int id)
        {
            var user = _usersRepository.GetUsersById(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }









        //GET BY EMAIL
        [HttpGet("GetUserByEmail={email}")]
        public IActionResult GetUserByEmail(string email)
        {
            var user = _usersRepository.GetUserByEmail(email);

            if (email == null || user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }










        //ADD
        [HttpPost]
        public IActionResult Post(Users user)
        {
            _usersRepository.Add(user);
            return CreatedAtAction("Get", new { id = user.Id }, user);
        }









        //UPDATE
        [HttpPut("{id}")]
        public IActionResult Put(int id, Users users)
        {
            if (id != users.Id)
            {
                return BadRequest();
            }
            _usersRepository.Update(users);
            return NoContent();
        }










        //DELETE
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _usersRepository.Delete(id);
            return NoContent();
        }
    }
}
