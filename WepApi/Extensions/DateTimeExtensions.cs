using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Extensions
{
    public static class DateTimeExtensions
    {
        public static DateTime ParseExact(this string input, string format)
        {
            return DateTime.ParseExact(input,
                format, null);
        }
    }
}
