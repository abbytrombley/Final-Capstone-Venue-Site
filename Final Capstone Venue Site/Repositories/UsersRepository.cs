using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Hosting;
using Final_Capstone_Venue_Site.Models;
using Final_Capstone_Venue_Site.Utils;


namespace Final_Capstone_Venue_Site.Repositories
{
    public class UsersRepository : BaseRepository, IUsersRepository
    {
        public UsersRepository(IConfiguration configuration) : base(configuration) { }

        public List<Users> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, Email, Password, IsAdmin, DisplayName 
                          FROM UserProfile
                      ORDER BY UserName ASC    
                                       ";
                    var reader = cmd.ExecuteReader();
                    var userProfiles = new List<Users>();

                    while (reader.Read())
                    {
                        userProfiles.Add(new Users()
                        {
                            Id = DbUtils.GetInt(reader, "id"),
                            Email = DbUtils.GetString(reader, "userName"),
                            Password = DbUtils.GetString(reader, "Pasword"),
                            IsAdmin = DbUtils.GetBoolean(reader, "IsAdmin"),
                            DisplayName = DbUtils.GetString(reader,"DisplayName")
                        });
                    }
                    reader.Close();
                    return userProfiles;
                }
            }
        }
        public Users GetUserByDisplayName(string displayName)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, DisplayName
                        FROM [User]
                        WHERE DisplayName = @displayName";

                    DbUtils.AddParameter(cmd, "@displayName", displayName);

                    Users user = null;

                    var reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        user = new Users()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            DisplayName = DbUtils.GetString(reader, "DisplayName")
                        };
                    }

                    reader.Close();

                    return user;
                }
            }
        }
        public void Add(Users user)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            INSERT INTO [User] (DisplayName)
                            OUTPUT INSERTED.ID
                            VALUES (@displayName)
    ";

                    DbUtils.AddParameter(cmd, "@displayName", user.DisplayName);

                    user.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
    }
}
   
        