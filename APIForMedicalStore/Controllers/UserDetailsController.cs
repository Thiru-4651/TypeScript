
using System;
using System.Collections.Generic;
using APIForMedicalStore.Controllers;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace APIForMedicalStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserDetailsController : ControllerBase
    {
        private readonly ApplicationDBContext _dbcontext;

        public UserDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbcontext = applicationDBContext;
        }
        // private static List<UserDetails>_users=new List<UserDetails>
        // {
        //     new UserDetails{EmailID="thirucse2002@gmail.com",PhoneNumber="9894583822",Balance=50},
        //     new UserDetails{EmailID="santhosh@gmail.com",PhoneNumber="9087654321",Balance=50}
        // };

        [HttpGet]
        public IActionResult GetUser()
        {
            return Ok(_dbcontext.users.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetUser(int id)
        {
            var user = _dbcontext.users.FirstOrDefault(m => m.UserID == id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public IActionResult PostUser([FromBody] UserDetails user)
        {
            _dbcontext.users.Add(user);
            _dbcontext.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult PutUser(int id, [FromBody] UserDetails user)
        {
            var user1 = _dbcontext.users.FirstOrDefault(m => m.UserID == id);
            if (user1 == null)
            {
                return NotFound();
            }
            user1.Balance=user.Balance;
            user1.UserEmail=user.UserEmail;
            user1.UserName=user.UserName;
            user1.UserPassword=user.UserPassword;
            user1.UserPhoneNumber=user.UserPhoneNumber;
            _dbcontext.SaveChanges();
            return Ok();
        }

        [HttpDelete ("{id}")]
        public IActionResult DeleteUser(int id)
        {
            var user=_dbcontext.users.FirstOrDefault(m=>m.UserID==id);
            if(user==null)
            {
                return NotFound();
            }
            _dbcontext.users.Remove(user);
            _dbcontext.SaveChanges();
            return Ok();
        }
    }
}