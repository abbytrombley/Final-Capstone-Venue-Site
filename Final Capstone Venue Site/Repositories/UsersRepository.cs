using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Hosting;
using Final_Capstone_Venue_Site.Models;
using Final_Capstone_Venue_Site.Utils;
using static System.Runtime.InteropServices.JavaScript.JSType;


namespace Final_Capstone_Venue_Site.Repositories
{
    public class UsersRepository : BaseRepository, IUsersRepository
    {
        public UsersRepository(IConfiguration configuration) : base(configuration) { }










        //GET ALL
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
                            Email = DbUtils.GetString(reader, "Email"),
                            Password = DbUtils.GetString(reader, "Password"),
                            IsAdmin = DbUtils.GetBoolean(reader, "IsAdmin"),
                            DisplayName = DbUtils.GetString(reader,"DisplayName")
                        });
                    }
                    reader.Close();
                    return userProfiles;
                }
            }
        }











        //GET BY ID
        public Users GetUsersById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id AS UsersId, Email, Password, IsAdmin, DisplayName
                          FROM Users
                         WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@Id", id);

                    Users users = null;
                    var reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {

                        users = new Users()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Email = DbUtils.GetString(reader, "Email"),
                            Password = DbUtils.GetString(reader, "Password"),
                            IsAdmin = DbUtils.GetBoolean(reader, "IsAdmin"),
                            DisplayName = DbUtils.GetString(reader, "DisplayName"),
                        };

                    }
                    reader.Close();
                    return users;

                }

            }
        }











        //GET BY DISPLAY NAME
        public Users GetUserByDisplayName(string displayName)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, Email, Password, IsAdmin, DisplayName 
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
                            Email = DbUtils.GetString(reader, "Email"),
                            Password = DbUtils.GetString(reader, "Password"),
                            IsAdmin = DbUtils.GetBoolean(reader, "IsAdmin"),
                            DisplayName = DbUtils.GetString(reader, "DisplayName")
                        };
                    }

                    reader.Close();

                    return user;
                }
            }
        }












        //ADD 
        public void Add(Users user)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Users (Email, Password, IsAdmin, DisplayName)
                        OUTPUT INSERTED.ID
                        VALUES (@Email, @Password, @IsAdmin, @DisplayName)
                                       ";
                    DbUtils.AddParameter(cmd, "@Email", user.Email);
                    DbUtils.AddParameter(cmd, "@Password", user.Password);
                    DbUtils.AddParameter(cmd, "@IsAdmin", user.IsAdmin);
                    DbUtils.AddParameter(cmd, "@DisplayName", user.DisplayName);

                    user.Id = (int)cmd.ExecuteScalar();
                }
            }
        }













        //UPDATE
        public void Update(Users user)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Users
                           SET Email = @Email,
                               Password = @Password,
                               IsAdmin = @IsAdmin,
                               DisplayName = @DisplayName
                         WHERE Id =@Id 
                                       ";
                    DbUtils.AddParameter(cmd, "@Email", user.Email);
                    DbUtils.AddParameter(cmd, "@Password", user.Password);
                    DbUtils.AddParameter(cmd, "@IsAdmin", user.IsAdmin);
                    DbUtils.AddParameter(cmd, "@DisplayName", user.DisplayName);
                    DbUtils.AddParameter(cmd, "@Id", user.Id);

                    cmd.ExecuteNonQuery();

                }
            }
        }











        //DELETE
        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Users WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
   
        