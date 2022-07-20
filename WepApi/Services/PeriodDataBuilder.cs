using System;
using System.Collections.Generic;
using System.Linq;
using API.Models;

namespace API.Services
{
    public class PeriodDataBuilder : IDisposable
    {
        private PeriodData _periodData = new PeriodData();
        private readonly IEnumerable<MarketData> _marketData;

        public PeriodDataBuilder(IEnumerable<MarketData> marketData)
        {
            _marketData = marketData ?? new MarketData[]{};
        }

        public decimal ComputeFirstPrice()
        {
            return _marketData.OrderBy(c => c.Time).FirstOrDefault()?.Price ?? 0;
        }

        public decimal ComputeLastPricePrice()
        {
            return _marketData.OrderByDescending(c => c.Time).FirstOrDefault()?.Price ?? 0;
        }

        public decimal ComputeMaxPrice()
        {
            return _marketData.Max(c=>c.Price);
        }

        public decimal ComputeMinPrice()
        {
            return _marketData.Min(c => c.Price);
        }
        public decimal ComputeSum()
        {
            return _marketData.Sum(c => c.Price);
        }
        public DateTime FindStartDate()
        {
            return _marketData.First().Time;//assumtion that they are always in some ranges
        }

        public void Build()
        {
            _periodData.FirstPrice = ComputeFirstPrice();
            _periodData.LastPrice = ComputeLastPricePrice();
            _periodData.MaxPrice = ComputeMaxPrice();
            _periodData.MinPrice = ComputeMinPrice();
            _periodData.Time = FindStartDate();
            _periodData.Sum = ComputeSum();
        }

        public PeriodData GetResult()
        {
            Build();
            return _periodData;
        }

        public void Dispose()
        {
        }
    }
}