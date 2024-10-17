using Final_Capstone_Venue_Site.Models;

namespace Final_Capstone_Venue_Site.Repositories
{
    public interface IEventsPurchaseRepository
    {
        List<EventPurchase> GetAll();
        void Add(EventPurchase eventPurchase);
    }
}
