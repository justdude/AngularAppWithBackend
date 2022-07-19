using System;

namespace API.Services
{
    public static class ParseExt
    {
        public static DateTime ParseExact(this string input)
        {
            return DateTime.ParseExact(input,
                "dd/MM/yyyy HH:mm:ss.fff", null);
        }
    }
}