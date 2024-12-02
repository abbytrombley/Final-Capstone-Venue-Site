using Final_Capstone_Venue_Site.Models;

namespace Final_Capstone_Venue_Site.Repositories
{
    public interface IUsersRepository
    { 
        List<Users> GetAll();
        Users GetUsersById(int id);
        Users GetUserByEmail(string email);
        public void Add(Users user);
        public void Update(Users user);
        public void Delete(int id);
    }
}
