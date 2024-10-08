using Final_Capstone_Venue_Site.Models;

namespace Final_Capstone_Venue_Site.Repositories
{
    public interface IUsersRepository
    { 
        List<Users> GetAll();
        public Users GetUserByDisplayName(string displayName);
        public void Add(Users user);
    }
}
