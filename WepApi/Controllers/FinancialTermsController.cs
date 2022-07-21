using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Threading.Tasks;
using API.Interfaces;
using API.Models;
using API.Services;
using Microsoft.AspNetCore.Http;
using API.Extensions;

namespace API.Controllers
{
    [ApiController]
    [Route("api/v1/finance")]
    public class FinancialTermsController : ControllerBase
    {
        private readonly ILogger<FinancialTermsController> _logger;
        private readonly IPeriodDataService _periodDataService;
        private static CsvStorage _csvStorage = new CsvStorage();

        public FinancialTermsController(ILogger<FinancialTermsController> logger)
        {
            _logger = logger;
            _periodDataService = new PeriodDataService();
        }

        [HttpGet("csv")]
        public string GetCsv()
        {
            return _csvStorage.CsvStr;
        }

        [HttpPost("csv")]
        [Produces("application/json")]
        [DisableRequestSizeLimit]
        public async Task<IActionResult> SetCsv([FromForm] IFormFile file)
        {
            try
            {
                _csvStorage.CsvStr = await FileReader.ReadFormFileAsync(file);

                var provider = new MarketDataCsvProvider();
                _csvStorage.Data = provider.Parse(_csvStorage.CsvStr, Constants.Formats.DateTimeFormat);
                return Ok();
            }
            catch (Exception e)
            {
                _logger.LogError($"SetCsv {e.Message}");
                return BadRequest();
            }
        }

        [HttpDelete("csv")]
        public async Task<IActionResult> ClearCsv()
        {
            _csvStorage.Data = new MarketData[]{};
            return Ok();
        }

        [HttpGet("periodData/{millisecondsInterval}")]
        public IEnumerable<PeriodData> GetPeriodData(long millisecondsInterval)
        {
            var periodData = _periodDataService.ComputePeriodData(_csvStorage.Data, TimeSpan.FromMilliseconds(millisecondsInterval));
            return periodData;
        }

    }
}
