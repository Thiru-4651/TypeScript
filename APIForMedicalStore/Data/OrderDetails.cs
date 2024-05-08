using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;

namespace APIForMedicalStore;

[Table("orderdetails", Schema = "public")]
public class OrderDetails
{
    [Key]
    public int OrderID { get; set; }
    public int UserID { get; set; }
    public string MedicineName { get; set; }
    public int MedicineCount { get; set; }
    public int TotalPrice { get; set; }
    public string OrderStatus { get; set; }
}