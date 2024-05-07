using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIForOnlineLibrary
{
    public class BorrowDetails
    {
        public int BorrowID { get; set; }
        public int BookID { get; set; }
        public int UserID { get; set; }
        public int BorrowBookCount { get; set; }
        public string Status  { get; set; }
    }
}