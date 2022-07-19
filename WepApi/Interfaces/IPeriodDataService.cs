using System;
using API.Models;

namespace API.Interfaces
{
    public interface IPeriodDataService
    {
        PeriodData[] ComputePeriodData(MarketData[] marketData, TimeSpan interval);
    }
}