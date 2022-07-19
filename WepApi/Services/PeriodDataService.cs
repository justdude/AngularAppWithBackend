using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using API.Interfaces;
using API.Models;

namespace API.Services
{
    public class PeriodDataService : IPeriodDataService
    {
        public Dictionary<DateTime, MarketData[]> GroupMarketDataWithRange(MarketData[] marketData, TimeSpan interval)
        {
            return marketData.GroupBy(c => c.Time.Ticks / interval.Ticks)
                .ToDictionary(k => new DateTime( k.Key * interval.Ticks), v => v.ToArray());
        }

        public PeriodData[] ComputePeriodData(MarketData[] marketData, TimeSpan interval)
        {
           return GroupMarketDataWithRange(marketData, interval)
                .Select(data => new PeriodDataBuilder(data.Value).GetResult()).ToArray();
        }

    }
}
