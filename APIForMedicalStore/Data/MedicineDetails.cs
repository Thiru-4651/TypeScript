using System;
namespace APIForMedicalStore;
public class MedicineDetails
{
    public int MedicineID { get; set; }
    public string MedicineName { get; set; }
    public int MedicineCount { get; set; }
    public int MedicinePrice { get; set; }
    public DateTime ExpiryDate { get; set; }
}