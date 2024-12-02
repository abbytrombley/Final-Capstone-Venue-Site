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
                        SELECT Id, Email, Password, IsAdmin
                          FROM Users  
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
                        SELECT Id AS UsersId, Email, Password, IsAdmin
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
                        };

                    }
                    reader.Close();
                    return users;

                }

            }
        }

















        //GET BY EMAIL
        public Users GetUserByEmail(string email)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, Email, Password, IsAdmin
                        FROM [Users]
                        WHERE Email = @email";

                    DbUtils.AddParameter(cmd, "@email", email);

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
                        INSERT INTO Users (Email, Password, IsAdmin)
                        OUTPUT INSERTED.ID
                        VALUES (@Email, @Password, @IsAdmin)
                                       ";
                    DbUtils.AddParameter(cmd, "@Email", user.Email);
                    DbUtils.AddParameter(cmd, "@Password", user.Password);
                    DbUtils.AddParameter(cmd, "@IsAdmin", user.IsAdmin);

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
                         WHERE Id =@Id 
                                       ";
                    DbUtils.AddParameter(cmd, "@Email", user.Email);
                    DbUtils.AddParameter(cmd, "@Password", user.Password);
                    DbUtils.AddParameter(cmd, "@IsAdmin", user.IsAdmin);
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
   
        