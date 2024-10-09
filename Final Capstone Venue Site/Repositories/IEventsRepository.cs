using Final_Capstone_Venue_Site.Models;
using Microsoft.Extensions.Hosting;

namespace Final_Capstone_Venue_Site.Repositories
{
    public interface IEventsRepository
    {
        List<Event> GetAll();
        Event GetById(int eventId);
        void Add(Event events);
        void Update(Event events);
        void Delete(int eventId);

    }
}
