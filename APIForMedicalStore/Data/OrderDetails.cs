using System;
namespace APIForMedicalStore;

public enum OrderStatus{ordered,cancelled};
public class OrderDetails
{
    public int OrderID { get; set; }
    public int MedicineID { get; set; }
    public int UserID { get; set; }
    public string MedicineName { get; set; }
    public int MedicineCount { get; set; }
    public int TotalPrice { get; set; }
    public OrderStatus Status { get; set; }
}