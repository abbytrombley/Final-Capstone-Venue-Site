using System.ComponentModel.DataAnnotations;

namespace Final_Capstone_Venue_Site.Models
{
    public class Users
    {
        [Required]
        [MaxLength(50)]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [MaxLength(255)]
        public string Email { get; set; }


        [Required]
        public bool IsAdmin { get; set; }

    } 
}
