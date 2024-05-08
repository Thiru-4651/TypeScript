using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
// using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;

namespace APIForMedicalStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderDetailsController :ControllerBase
    {
        private readonly ApplicationDBContext _dbcontext;

        public OrderDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbcontext=applicationDBContext;
        }

        [HttpGet]
        public IActionResult GetOrder()
        {
            return Ok(_dbcontext.orders.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetOrder(int id)
        {
            var order=_dbcontext.orders.FirstOrDefault(m=>m.OrderID==id);
            if(order==null)
            {
                return NotFound();
            }
            return Ok(order);
        }

        [HttpPost]
        public IActionResult PostOrder([FromBody] OrderDetails order)
        {
            _dbcontext.orders.Add(order);
            _dbcontext.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult PutUser(int id,[FromBody]OrderDetails order)
        {
            var neworder=_dbcontext.orders.FirstOrDefault(m=>m.OrderID==id);
            if(neworder==null)
            {
                return NotFound();
            }
            neworder.MedicineCount=order.MedicineCount;
            neworder.MedicineName=order.MedicineName;
            neworder.OrderStatus=order.OrderStatus;
            neworder.TotalPrice=order.TotalPrice;
            _dbcontext.SaveChanges();
            return Ok();
        }

        [HttpDelete ("{id}")]
        public IActionResult DeleteUser(int id)
        {
            var order=_dbcontext.orders.FirstOrDefault(m=>m.OrderID==id);
            if(order==null)
            {
                return NotFound();
            }
            _dbcontext.orders.Remove(order);
            _dbcontext.SaveChanges();
            return Ok();
        }
    }
}