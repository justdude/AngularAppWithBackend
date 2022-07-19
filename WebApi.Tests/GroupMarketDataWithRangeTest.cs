using System;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using API.Services;

namespace WebApi.Tests
{

   [TestClass]
    public class GroupMarketDataWithRangeTest
    {
        [TestMethod]
        public void GroupMarketDataWithRange_InputMinutes_ReturnsCombinedByMinutes()
        {
            var periodDataService = new PeriodDataService();
            var data = periodDataService.GroupMarketDataWithRange(MockOfMarketData.MockMarkedDateWithMinutes(), TimeSpan.FromMilliseconds(1000*60));
            Assert.IsTrue(data.Keys.Count == 2);
        }

        [TestMethod]
        public void GroupMarketDataWithRange_InputMinutes_ReturnsCombinedByMinutesAndHours()
        {
            var periodDataService = new PeriodDataService();
            var data = periodDataService.GroupMarketDataWithRange(MockOfMarketData.MockMarkedDateWithHours(), TimeSpan.FromMilliseconds(1000 * 60));
            Assert.IsTrue(data.Keys.Count == 5);
        }

        [TestMethod]
        public void GroupMarketDataWithRange_InputHours_ReturnsCombinedByHours()
        {
            var periodDataService = new PeriodDataService();
            var data = periodDataService.GroupMarketDataWithRange(MockOfMarketData.MockMarkedDateWithHours(), TimeSpan.FromMilliseconds(1000 * 60 *60));
            Assert.IsTrue(data.Keys.Count == 3);
        }
    }
}
