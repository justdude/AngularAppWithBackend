using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class PeriodData
    {
        /// <summary>
        ///Open – First Price for the period
        /// </summary>
        public decimal FirstPrice { get; set; }
        /// <summary>
        ///2. Close – Last Price for the period
        /// </summary>
        public decimal LastPrice { get; set; }
        /// <summary>
        ///3. High – Max Price for the period
        /// </summary>
        public decimal MaxPrice { get; set; }
        /// <summary>
        ///4. Low– Min Price for the period
        /// </summary>
        public decimal MinPrice { get; set; }
        /// <summary>
        ///5. Sum Volume – Summary of all Quantity
        /// </summary>
        public decimal Sum { get; set; }
        public DateTime Time { get; set; }
    }
}
