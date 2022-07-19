using System;

namespace API.Models
{
    public class MarketData
    {
        public DateTime Time { get; set; }
        public int Qantity { get; set; }
        public decimal Price { get; set; }
    }
}