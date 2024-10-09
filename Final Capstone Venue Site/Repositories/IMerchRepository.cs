using Final_Capstone_Venue_Site.Models;
using Microsoft.Extensions.Hosting;

namespace Final_Capstone_Venue_Site.Repositories
{
    public interface IMerchRepository
    {
        List<Merch> GetAll();
        Merch GetById(int merchId);
        void Add(Merch merch);
        void Delete(int merchId);
    

    }
}
