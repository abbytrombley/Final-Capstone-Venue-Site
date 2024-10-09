using Final_Capstone_Venue_Site.Models;
using Final_Capstone_Venue_Site.Utils;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Final_Capstone_Venue_Site.Repositories
{
    public class MerchRepository : BaseRepository, IMerchRepository
    {
        // Constructor to pass configuration to the base class
        public MerchRepository(IConfiguration config) : base(config) { }








        //GET ALL
        public List<Merch> GetAll()
        {
            using (var conn = Connection)  // Now using the BaseRepository's Connection property
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT m.Id, m.Picture, m.ItemName, m.Description, m.Price, m.Quantity
                                    FROM Merch m
                                    ORDER BY m.Name ";

                    var reader = cmd.ExecuteReader();
                    var merch = new List<Merch>();
                    while (reader.Read())
                    {
                        merch.Add(new Merch()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Picture = reader.GetString(reader.GetOrdinal("Picture")),
                            ItemName = reader.GetString(reader.GetOrdinal("ItemName")),
                            Description = reader.GetString(reader.GetOrdinal("Description")),
                            Price = reader.GetInt32(reader.GetOrdinal("Price")),
                            Quantity = reader.GetInt32(reader.GetOrdinal("Quantity"))

                        });
                    }

                    reader.Close();

                    return merch;
                }
            }
        }


        







        //GET BY ID
        public Merch GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            SELECT ItemName
                            FROM Merch
                           WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    Merch merch = null;
                    while (reader.Read())
                    {
                        merch = new Merch()
                        {
                            Id = id,

                            ItemName = reader.GetString(reader.GetOrdinal("Name")),

                        };
                    }

                    reader.Close();

                    return merch;
                }
            }
        }









        //ADD
        public void Add(Merch merch)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO UserProfile (UserName, FirstName, LastName, Email, ImageUrl)
                        OUTPUT INSERTED.ID
                        VALUES (@UserName, @FirstName, @LastName, @Email, @ImageUrl)
                                       ";
                    DbUtils.AddParameter(cmd, "@UserName", profile.UserName);
                    DbUtils.AddParameter(cmd, "@FirstName", profile.FirstName);
                    DbUtils.AddParameter(cmd, "@LastName", profile.LastName);
                    DbUtils.AddParameter(cmd, "@Email", profile.Email);
                    DbUtils.AddParameter(cmd, "@ImageUrl", profile.ImageUrl);

                    profile.Id = (int)cmd.ExecuteScalar();

                    merch.Id = id;
                }
            }
        }








        //UPDATE
        public void Update(Merch merch)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            UPDATE Merch
                            SET 
                                [ItemName] = @itemname
                            WHERE Id = @id";

                    DbUtils.AddParameter(cmd, "@itemname", merch.ItemName);
                    DbUtils.AddParameter(cmd, "@id", merch.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }








        //DELETE
        public void Delete(int merchId)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            DELETE FROM Merch
                            WHERE Id = @id
                        ";

                    DbUtils.AddParameter(cmd, "@id", merchId);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}








//THINGS I've Learned:
//It's best to do crud methods one at a time in repo/controller/interface
//Double check naming conventions
//Double check you're making the right files, ie. API not MVC, and class vs. interface vs. controller