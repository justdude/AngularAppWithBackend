using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;

namespace API.Services
{
    public class CsvStorage
    {
        public string CsvStr { get; set; } = string.Empty;
        public MarketData[] Data { get; set; } = new MarketData[]{};
    }
}
