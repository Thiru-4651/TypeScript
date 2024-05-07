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
        private static List<BorrowDetails>_borrows=new List<BorrowDetails>
        {
            new BorrowDetails{BorrowID=1,BookID=1,UserID=1,BorrowBookCount=2,Status="Borrowed"},
            new BorrowDetails{BorrowID=2,BookID=4,UserID=2,BorrowBookCount=2,Status="Returned"},
            new BorrowDetails{BorrowID=3,BookID=5,UserID=1,BorrowBookCount=8,Status="Borrowed"}
        };
        [HttpGet]
        public IActionResult GetUsers()
        {
            return Ok(_borrows);
        }

        [HttpGet("{id}")]
        public IActionResult GetMedicine(int id)
        {
            var medicine = _borrows.Find(m => m.BorrowID == id);
            if (medicine == null)
            {
                return NotFound();
            }
            return Ok(medicine);
        }

        [HttpPost]
        public IActionResult PostMedicine([FromBody] BorrowDetails medicine)
        {
            _borrows.Add(medicine);
            // You might want to return CreatedAtAction or another appropriate response
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult PutMedicine(int id, [FromBody] BorrowDetails medicine)
        {
            var index = _borrows.FindIndex(m => m.BorrowID == id);
            if (index < 0)
            {
                return NotFound();
            }
            _borrows[index] = medicine;
            // You might want to return NoContent or another appropriate response
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteContact(int id)
        {
            var medicine = _borrows.Find(m => m.BorrowID == id);
            if (medicine == null)
            {
                return NotFound();
            }
            _borrows.Remove(medicine);
            // You might want to return NoContent or another appropriate response
            return Ok();
        }
    }
}