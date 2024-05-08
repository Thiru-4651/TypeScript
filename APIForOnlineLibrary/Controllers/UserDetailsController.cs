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
        private readonly ApplicationDBContext _dbContext;

        public UserDetailsController (ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        } 
        // private static List<UserDetails>_Users=new List<UserDetails>
        // {
        //     new UserDetails{UserID=1,UserName="Thiru",Department="CSE",Email="thiru@gmail.com",Password="thiru",MobileNumber="9894583822",Balance=100},
        //     new UserDetails{UserID=2,UserName="Santhosh",Department="IT",Email="santhosh@gmail.com",Password="santhosh",MobileNumber="9894582238",Balance=100}
        // };
        [HttpGet]
        public IActionResult GetUsers()
        {
            return Ok(_dbContext.users.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetMedicine(int id)
        {
            var medicine = _dbContext.users.FirstOrDefault(m => m.UserID == id);
            if (medicine == null)
            {
                return NotFound();
            }
            return Ok(medicine);
        }

        [HttpPost]
        public IActionResult PostMedicine([FromBody] UserDetails medicine)
        {
            _dbContext.users.Add(medicine);
            _dbContext.SaveChanges();
            // You might want to return CreatedAtAction or another appropriate response
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult PutMedicine(int id, [FromBody] UserDetails medicine)
        {
            var index = _dbContext.users.FirstOrDefault(m => m.UserID == id);
            if (index == null)
            {
                return NotFound();
            }
            index.Balance=medicine.Balance;
            index.Department=index.Department;
            index.Email=medicine.Email;
            index.MobileNumber=medicine.MobileNumber;
            index.Password=medicine.Password;
            index.UserName=medicine.UserName;
            _dbContext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteContact(int id)
        {
            var medicine = _dbContext.users.FirstOrDefault(m => m.UserID == id);
            if (medicine == null)
            {
                return NotFound();
            }
            _dbContext.users.Remove(medicine);
            // You might want to return NoContent or another appropriate response
            return Ok();
        }
    }
}