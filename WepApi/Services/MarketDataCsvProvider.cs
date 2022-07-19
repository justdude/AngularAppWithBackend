using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using Microsoft.VisualBasic.FileIO;
using API.Models;

namespace API.Services
{
    public class MarketDataCsvProvider
    {
        public MarketData[] Parse(string csvText, DateTimeFormatInfo dateFormat, string delimiter = ",")
        {
            List<MarketData> results = new List<MarketData>();
            using (TextFieldParser parser = new TextFieldParser(new StringReader(csvText)))
            {
                parser.TextFieldType = FieldType.Delimited;
                parser.SetDelimiters(delimiter);
                while (!parser.EndOfData)
                {
                    string[] fields = parser.ReadFields();
                    var data = new MarketData()
                    {
                        Time = DateTime.Parse(fields[0], dateFormat),
                        Qantity = int.Parse(fields[1]),
                        Price = decimal.Parse(fields[2]),
                    };
                    results.Add(data);
                }
                return results.ToArray();
            }
        }
    }
}