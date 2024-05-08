using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
	//using System.ComponentModel.DataAnnotations;
	using System.ComponentModel.DataAnnotations.Schema;


namespace APIForOnlineLibrary
{
    [Table("userdetails", Schema = "public")]
    public class UserDetails
    {
        [Key]
        public int UserID { get; set; }
        public string UserName { get; set; }
        public string Department { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string MobileNumber { get; set; }
        public int Balance { get; set; }
    }
}