using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;
namespace APIForMedicalStore;
[Table("userdetails", Schema = "public")]
public class UserDetails
{
    [Key]
    public int UserID { get; set; }
    public string UserName { get; set; }
    public string UserEmail { get; set; }
    public string UserPassword { get; set; }
    public string UserPhoneNumber { get; set; }
    public int Balance { get; set; }
}
