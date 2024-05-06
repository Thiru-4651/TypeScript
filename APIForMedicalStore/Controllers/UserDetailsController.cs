using System;
using System.Collections.Generic;
//using API.controller;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace APIForMedicalStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserDetailsController:ControllerBase
    {
        private static List<UserDetails>_users=new List<UserDetails>
        {
            new UserDetails{EmailID="thirucse2002@gmail.com",PhoneNumber="9894583822",Balance=50},
            new UserDetails{EmailID="santhosh@gmail.com",PhoneNumber="9087654321",Balance=50}
        };

        [HttpGet]
        public IActionResult GetUser()
        {
            return Ok(_users);
        }

        [HttpGet("{id}")]
        public IActionResult GetUser(int id)
        {
            var user=_users.Find(m=>m.UserID==id);
            if(user==null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public IActionResult PostUser([FromBody] UserDetails user)
        {
            _users.Add(user);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult PutUser(int id,[FromBody] UserDetails user)
        {
            var index=_users.Find(m=>m.UserID==id);

        }
    }
}