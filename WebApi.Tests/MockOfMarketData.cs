using API.Models;
using API.Services;

namespace WebApi.Tests
{
    public class MockOfMarketData
    {
        public static MarketData[] MockMarkedDateWithMinutes()
        {
            var tt = new MarketData[]
            {
                new MarketData()
                {
                    Time = "17/06/2022 12:14:50.058".ParseExact(),
                    Qantity = 1000000,
                    Price = 1.36239M
                },
                new MarketData()
                {
                    Time = "17/06/2022 12:14:29.943".ParseExact(),
                    Qantity = 1000000,
                    Price = 1.36264M
                },
                new MarketData()
                {
                    Time = "17/06/2022 12:15:38.318".ParseExact(),
                    Qantity = 1125000,
                    Price = 1.36266M
                },
                new MarketData()
                {
                    Time = "17/06/2022 12:15:16.603".ParseExact(),
                    Qantity = 5000000,
                    Price = 1.36264M
                },
                new MarketData()
                {
                    Time = "17/06/2022 12:15:16.603".ParseExact(),
                    Qantity = 5000000,
                    Price = 1.36264M
                }
            };
            return tt;
        }

        public static MarketData[] MockMarkedDateWithHours()
        {
            var tt = new MarketData[]
            {
                new MarketData()
                {
                    Time = "17/06/2022 12:14:50.058".ParseExact(),
                    Qantity = 1000000,
                    Price = 1.36239M
                },
                new MarketData()
                {
                    Time = "17/06/2022 12:14:29.943".ParseExact(),
                    Qantity = 1000000,
                    Price = 1.36264M
                },
                new MarketData()
                {
                    Time = "17/06/2022 12:15:38.318".ParseExact(),
                    Qantity = 1125000,
                    Price = 1.36266M
                },
                new MarketData()
                {
                    Time = "17/06/2022 12:15:16.603".ParseExact(),
                    Qantity = 5000000,
                    Price = 1.36264M
                },
                new MarketData()
                {
                    Time = "17/06/2022 12:15:16.603".ParseExact(),
                    Qantity = 5000000,
                    Price = 1.36264M
                },
                new MarketData()
                {
                    Time = "17/06/2022 13:15:16.603".ParseExact(),
                    Qantity = 5000000,
                    Price = 1.36264M
                },
                new MarketData()
                {
                    Time = "17/06/2022 13:33:16.603".ParseExact(),
                    Qantity = 5000000,
                    Price = 1.36264M
                },
                new MarketData()
                {
                    Time = "17/06/2022 14:15:16.603".ParseExact(),
                    Qantity = 5000000,
                    Price = 1.36264M
                },
            };
            return tt;
        }
    }
}