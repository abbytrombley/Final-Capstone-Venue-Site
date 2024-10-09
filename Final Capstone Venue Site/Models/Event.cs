namespace Final_Capstone_Venue_Site.Models
{
    public class Event
    {
        public int Id { get; set; }
        public string ArtistName { get; set; }
        public string Picture { get; set; }
        public string SupportingArtist { get; set; }
        public Double Price { get; set; }
        public DateTime Date { get; set; }
    }
}
