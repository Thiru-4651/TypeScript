using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace APIForOnlineLibrary.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BorrowDetailsController:ControllerBase
    {
        private readonly ApplicationDBContext _dbcontext;
        public BorrowDetailsController (ApplicationDBContext applicationDBContext)
        {
            _dbcontext=applicationDBContext;
        } 
        // private static List<BorrowDetails>_borrows=new List<BorrowDetails>
        // {
        //     new BorrowDetails{BorrowID=1,BookID=1,UserID=1,BorrowedDate=new DateTime(2023,12,12),BorrowBookCount=2,Status="Borrowed",PaidFineAmount=0},
        //     new BorrowDetails{BorrowID=2,BookID=4,UserID=2,BorrowedDate=new DateTime(2023,12,26),BorrowBookCount=2,Status="Returned",PaidFineAmount=100},
        //     new BorrowDetails{BorrowID=3,BookID=5,UserID=1,BorrowedDate=new DateTime(2023,05,26),BorrowBookCount=8,Status="Returned",PaidFineAmount=40},
        //     new BorrowDetails{BorrowID=4,BookID=3,UserID=2,BorrowedDate=new DateTime(2023,12,15),BorrowBookCount=5,Status="Borrowed",PaidFineAmount=0},
        // };
        [HttpGet]
        public IActionResult GetUsers()
        {
            return Ok(_dbcontext.borrows.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetMedicine(int id)
        {
            var medicine = _dbcontext.borrows.FirstOrDefault(m => m.BorrowID == id);
            if (medicine == null)
            {
                return NotFound();
            }
            return Ok(medicine);
        }

        [HttpPost]
        public IActionResult PostMedicine([FromBody] BorrowDetails medicine)
        {
            _dbcontext.Add(medicine);
            _dbcontext.SaveChanges();
            // You might want to return CreatedAtAction or another appropriate response
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult PutMedicine(int id, [FromBody] BorrowDetails medicine)
        {
            var index = _dbcontext.borrows.FirstOrDefault(m => m.BorrowID == id);
            if (index == null)
            {
                return NotFound();
            }
            index.BorrowBookCount=medicine.BorrowBookCount;
            index.BorrowedDate=medicine.BorrowedDate;
            index.PaidFineAmount=medicine.PaidFineAmount;
            index.Status=medicine.Status;
            _dbcontext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteContact(int id)
        {
            var medicine = _dbcontext.borrows.FirstOrDefault(m => m.BorrowID == id);
            if (medicine == null)
            {
                return NotFound();
            }
            _dbcontext.borrows.Remove(medicine);
            _dbcontext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }
    }
}