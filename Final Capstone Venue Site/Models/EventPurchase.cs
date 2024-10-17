namespace Final_Capstone_Venue_Site.Models
{
    public class EventPurchase
    {
        public int Id { get; set; }
        public DateTime DatePurchased { get; set; }
        public int? EventId { get; set; }
        public Double Price { get; set; }
        public int? MerchId { get; set; }
      
    }
}
