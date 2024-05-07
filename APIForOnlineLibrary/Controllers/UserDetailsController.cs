using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace APIForOnlineLibrary.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserDetailsController:ControllerBase
    {
        private static List<UserDetails>_Users=new List<UserDetails>
        {
            new UserDetails{UserID=1,UserName="Thiru",Department="CSE",MobileNumber="9894583822",Balance=100},
            new UserDetails{UserID=2,UserName="Santhosh",Department="IT",MobileNumber="9894582238",Balance=100}
        };
        [HttpGet]
        public IActionResult GetUsers()
        {
            return Ok(_Users);
        }

        [HttpGet("{id}")]
        public IActionResult GetMedicine(int id)
        {
            var medicine = _Users.Find(m => m.UserID == id);
            if (medicine == null)
            {
                return NotFound();
            }
            return Ok(medicine);
        }

        [HttpPost]
        public IActionResult PostMedicine([FromBody] UserDetails medicine)
        {
            _Users.Add(medicine);
            // You might want to return CreatedAtAction or another appropriate response
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult PutMedicine(int id, [FromBody] UserDetails medicine)
        {
            var index = _Users.FindIndex(m => m.UserID == id);
            if (index < 0)
            {
                return NotFound();
            }
            _Users[index] = medicine;
            // You might want to return NoContent or another appropriate response
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteContact(int id)
        {
            var medicine = _Users.Find(m => m.UserID == id);
            if (medicine == null)
            {
                return NotFound();
            }
            _Users.Remove(medicine);
            // You might want to return NoContent or another appropriate response
            return Ok();
        }
    }
}