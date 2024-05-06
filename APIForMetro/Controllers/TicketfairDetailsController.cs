using System;
using System.Collections.Generic;
using Metrocardapplication;
using Microsoft.AspNetCore.Mvc;

namespace Metrocardapplication.controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketfairDetailsController:ControllerBase
    {
        private static List<TicketfairDetails>_ticketfair=new List<TicketfairDetails>
        {
            
            new TicketfairDetails{TicketID=21,Fromlocation="Airport",Tolocation="Egmore",Ticketprice=55},
            new TicketfairDetails{TicketID=22,Fromlocation="Airport",Tolocation="Koyambedu",Ticketprice=25},
            new TicketfairDetails{TicketID=23,Fromlocation="Alandur",Tolocation="Koyambedu",Ticketprice=25},

        };

        [HttpGet]
        public IActionResult GetTicket()
        {
            return Ok(_ticketfair);
        }

        [HttpGet("{id}")]
        public IActionResult GetTicket(int id)
        {
            var ticket=_ticketfair.Find(m=>m.TicketID==id);
            if(ticket==null)
            {
                return NotFound();
            }
            return Ok(ticket);
        }

        [HttpPost]
        public IActionResult PostTicket([FromBody]TicketfairDetails ticketfair)
        {
            _ticketfair.Add(ticketfair);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult PutTicket(int id,[FromBody] TicketfairDetails ticketfair)
        {
            var index=_ticketfair.FindIndex(m=>m.TicketID==id);
            if(index<0)
            {
                return NotFound();
            }
            _ticketfair[index]=ticketfair;
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTicket(int id)
        {
            var ticket=_ticketfair.Find(m=>m.TicketID==id);
            if(ticket==null)
            {
                return NotFound();
            }
            _ticketfair.Remove(ticket);
            return Ok();
        }
    }
}