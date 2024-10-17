using Final_Capstone_Venue_Site.Models;
using Final_Capstone_Venue_Site.Utils;
using Final_Capstone_Venue_Site.Models;
using Final_Capstone_Venue_Site.Utils;
using System.Reflection.PortableExecutable;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Hosting;
using Azure;
using System.Data;

namespace Final_Capstone_Venue_Site.Repositories
{
    public class EventsPurchaseRepository : BaseRepository, IEventsPurchaseRepository
    {
        // Constructor to pass configuration to the base class
        public EventsPurchaseRepository(IConfiguration config) : base(config) { }







        //GET ALL
        public List<EventPurchase> GetAll()
        {
            using (var conn = Connection)  // Now using the BaseRepository's Connection property
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT e.Id, e.DatePurchased, e.EventId, e.Price, e.MerchId
                                    FROM Events e
                                    ORDER BY e.Id ";

                    var reader = cmd.ExecuteReader();
                    var eventPurchase = new List<EventPurchase>();
                    while (reader.Read())
                    {
                        eventPurchase.Add(new EventPurchase()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            DatePurchased = reader.GetDateTime(reader.GetOrdinal("DatePurchased")),
                            EventId = reader.GetInt32(reader.GetOrdinal("EventId")),
                            Price = reader.GetDouble(reader.GetOrdinal("Price")),
                            MerchId = reader.GetInt32(reader.GetOrdinal("MerchId"))

                        });
                    }


                    reader.Close();

                    return eventPurchase;
                }
            }
        }












        //ADD aka POST
        public void Add(EventPurchase eventPurchase)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                 INSERT INTO Events (DatePurchased, EventId, MerchId, Price)
                 OUTPUT INSERTED.ID
                 VALUES (@DatePurchased, @EventId, @MerchId, @price);
             ";

                    DbUtils.AddParameter(cmd, "@DatePurchased", eventPurchase.DatePurchased);
                    DbUtils.AddParameter(cmd, "@EventId", eventPurchase.EventId);
                    DbUtils.AddParameter(cmd, "@MerchId", eventPurchase.MerchId);
                    DbUtils.AddParameter(cmd, "@price", eventPurchase.Price);

                    int id = (int)cmd.ExecuteScalar();

                    eventPurchase.Id = id;
                }
            }
        }


    }
}









