using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using Microsoft.VisualBasic.FileIO;
using API.Models;
using API.Extensions;

namespace API.Services
{
    public class MarketDataCsvProvider
    {
        public MarketData[] Parse(string csvText, string dateFormat, string delimiter = ",")
        {
            List<MarketData> results = new List<MarketData>();
            using (TextFieldParser parser = new TextFieldParser(new StringReader(csvText)))
            {
                bool isFirstLineHeader = true;
                parser.TextFieldType = FieldType.Delimited;
                parser.SetDelimiters(delimiter);
                while (!parser.EndOfData)
                {
                    string[] fields = parser.ReadFields();
                    if (isFirstLineHeader){ isFirstLineHeader = false; continue;}
                    var data = new MarketData()
                    {

                        Time = fields[0].ParseExact(dateFormat),
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