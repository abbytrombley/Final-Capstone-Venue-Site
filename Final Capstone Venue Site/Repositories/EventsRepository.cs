using Final_Capstone_Venue_Site.Models;
using Final_Capstone_Venue_Site.Utils;
using System.Reflection.PortableExecutable;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Hosting;
using Azure;
using System.Data;



namespace Final_Capstone_Venue_Site.Repositories
{
    public class EventsRepository : BaseRepository, IEventsRepository
    {
        // Constructor to pass configuration to the base class
        public EventsRepository(IConfiguration config) : base(config) { }







        //GET ALL
        public List<Event> GetAll()
        {
            using (var conn = Connection)  // Now using the BaseRepository's Connection property
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT e.Id, e.Picture, e.ArtistName, e.SupportingArtist, e.Price, e.Date
                                    FROM Events e
                                    ORDER BY e.ArtistName ";

                    var reader = cmd.ExecuteReader();
                    var events = new List<Event>();
                    while (reader.Read())
                    {
                        events.Add(new Event()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Picture = reader.GetString(reader.GetOrdinal("Picture")),
                            ArtistName = reader.GetString(reader.GetOrdinal("ArtistName")),
                            SupportingArtist = reader.GetString(reader.GetOrdinal("SupportingArtist")),
                            Price = reader.GetDouble(reader.GetOrdinal("Price")),
                            Date = reader.GetDateTime(reader.GetOrdinal("Date"))

                        });
                    }


                    reader.Close();

                    return events;
                }
            }
        }





        //GET BY ID
        public Event GetById(int id)
        {
            using (var conn = Connection) //Now using Repos connection
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            SELECT ArtistName
                            FROM Events
                           WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    Event events = null;
                    while (reader.Read())
                    {
                        events = new Event()
                        {
                            Id = id,

                            ArtistName = reader.GetString(reader.GetOrdinal("ArtistName")),

                        };
                    }

                    reader.Close();

                    return events;
                }
            }

        }



        //ADD
        public void Add(Event events)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                 INSERT INTO Events (ArtistName)
                 OUTPUT INSERTED.ID
                 VALUES (@artistname);
             ";

                    DbUtils.AddParameter(cmd, "@artistName", events.ArtistName);

                    int id = (int)cmd.ExecuteScalar();

                    events.Id = id;
                }
            }
        }






        //UPDATE
        public void Update(Event events)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                UPDATE Events
                                SET 
                                    [ArtistName] = @artistName

                                WHERE Id = @id";

                    DbUtils.AddParameter(cmd, "@artistName", events.ArtistName);
                    DbUtils.AddParameter(cmd, "@id", events.Id);
                    DbUtils.AddParameter(cmd, "@picture", events.Picture);
                    DbUtils.AddParameter(cmd, "@supportingartist", events.SupportingArtist);
                    DbUtils.AddParameter(cmd, "@price", events.Price);
                    DbUtils.AddParameter(cmd, "@date", events.Date);

                    cmd.ExecuteNonQuery();
                }
            }
        }





            //DELETE
             public void Delete(int eventId)
            {
                using (var conn = Connection)
                {
                    conn.Open();

                    using (var cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = @"
                                DELETE FROM Events
                                WHERE Id = @id
                            ";

                        DbUtils.AddParameter(cmd, "@id", eventId);

                        cmd.ExecuteNonQuery();
                    }
                }
            }
        
    }
}
    




//fill out objects for methods