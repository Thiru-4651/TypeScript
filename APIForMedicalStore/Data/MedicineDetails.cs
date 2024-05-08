using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;
namespace APIForMedicalStore;
[Table("medicinedetails", Schema = "public")]
public class MedicineDetails
{
    [Key]
    public int MedicineID { get; set; }
    public string MedicineName { get; set; }
    public int MedicineCount { get; set; }
    public int MedicinePrice { get; set; }
    public DateTime ExpiryDate { get; set; }
}