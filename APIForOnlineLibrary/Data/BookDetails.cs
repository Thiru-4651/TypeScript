using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIForOnlineLibrary
{
    public class BookDetails
    {
        public int BookID { get; set; }
        public string BookName { get; set; }
        public string AuthorName { get; set; }
        public int BookCount { get; set; }
    }
}