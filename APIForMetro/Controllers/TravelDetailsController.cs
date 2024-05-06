using System;
using System.Collections.Generic;
using Metrocardapplication;
using Microsoft.AspNetCore.Mvc;

namespace Metrocardapplication.controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class TravelDetailsController:ControllerBase
    {
        private static List<TravelDetails>_travel=new List<TravelDetails>
        {
            
            new TravelDetails{TravelID=11,Cardnumber=1,Fromlocation="Airport",Tolocation="Egmore",Date=new DateTime(2023,10,10),Travelcost=25},
            new TravelDetails{TravelID=12,Cardnumber=2,Fromlocation="Egmore",Tolocation="Koyambedu",Date=new DateTime(2023,10,10),Travelcost=32},
        };

        [HttpGet]
        public IActionResult GetDetails()
        {
            return Ok(_travel);
        }

        [HttpGet("{id}")]
        public IActionResult GetDetails(int id)
        {
            var travel=_travel.Find(m=>m.TravelID==id);
            if(travel==null)
            {
                return NotFound();
            }
            return Ok(travel);
        }
        //int number=10;

        [HttpPost]
        public IActionResult PostDetails([FromBody] TravelDetails travel)
        {
            travel.TravelID=_travel.Count+11;
            _travel.Add(travel);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult PutDetails(int id,[FromBody] TravelDetails travel)
        {
            var index=_travel.FindIndex(m=>m.TravelID==id);
            {
                if(index<0)
                {
                    return NotFound();
                }
                _travel[index]=travel;
                return Ok();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteDetails(int id)
        {
            var travel=_travel.Find(m=>m.TravelID==id);
            if(travel==null)
            {
                return NotFound();
            }
            _travel.Remove(travel);
            return Ok();
        }
    }
}