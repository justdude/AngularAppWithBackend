using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Globalization;
using API.Interfaces;
using API.Models;
using API.Services;

namespace API.Controllers
{
    [ApiController]
    [Route("api/v1/finance")]
    public class FinancialTermsController : ControllerBase
    {
        private readonly ILogger<FinancialTermsController> _logger;
        private readonly IPeriodDataService _periodDataService;
        private CsvStorage _csvStorage;

        public FinancialTermsController(ILogger<FinancialTermsController> logger)
        {
            _logger = logger;
            _csvStorage = new CsvStorage();
            _periodDataService = new PeriodDataService();
        }

        [HttpGet("csv")]
        public string GetCsv()
        {
            return _csvStorage.CsvStr;
        }

        [HttpPost("csv")]
        public IActionResult SetCsv([FromBody]string csvText)
        {
            _csvStorage.CsvStr = csvText;
            var provider = new MarketDataCsvProvider();
            _csvStorage.Data = provider.Parse(_csvStorage.CsvStr, DateTimeFormatInfo.InvariantInfo); ;
            return Ok();
        }

        [HttpGet("periodData")]
        public IEnumerable<PeriodData> GetPeriodData(double? millisecondsInterval)
        {
            var periodData = _periodDataService.ComputePeriodData(_csvStorage.Data, TimeSpan.FromMilliseconds(millisecondsInterval ?? 1000 * 60));
            return periodData;
        }

    }
}
