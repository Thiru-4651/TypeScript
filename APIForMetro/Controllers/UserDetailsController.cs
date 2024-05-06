using System;
using System.Collections.Generic;
using Metrocardapplication;
using Microsoft.AspNetCore.Mvc;

namespace Metrocardapplication.controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserDetailsController: ControllerBase
    {
        private static List<UserDetails>_Users=new List<UserDetails>
        {
            new UserDetails{Cardnumber=1,Username="Ravi",Phonenumber="9848812345",Balance=1000},
            new UserDetails{Cardnumber=2,Username="Baskaran",Phonenumber="9848854321",Balance=1000}
        };

        [HttpGet]
        public IActionResult GetUsers()
        {
            return Ok(_Users);
        }

        [HttpGet("{id}")]

        public IActionResult GetUsers(int id)
        {
            var user=_Users.Find(m=>m.Cardnumber==id);
            if(user==null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public IActionResult PostUser([FromBody] UserDetails user)
        {
            user.Cardnumber=_Users.Count+1;
            _Users.Add(user);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult PutUser(int id,[FromBody] UserDetails user)
        {
            var index=_Users.FindIndex(m=>m.Cardnumber==id);
            {
                if(index<0)
                {
                    return NotFound();
                }
                _Users[index]=user;
                return Ok();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            var user=_Users.Find(m=>m.Cardnumber==id);
            {
                if(user==null)
                {
                    return NotFound();
                }
                _Users.Remove(user);
                return Ok();
            }
        }
    }
}