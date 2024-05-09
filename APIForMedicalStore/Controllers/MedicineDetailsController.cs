using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http.HttpResults;

namespace APIForMedicalStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicineDetailsController:ControllerBase
    {
        private readonly ApplicationDBContext _dbcontext;

        public MedicineDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbcontext=applicationDBContext;
        }

        [HttpGet]
        public IActionResult GetMedicine()
        {
            return Ok(_dbcontext.medicines.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetMedicine(int id)
        {
            var medicine=_dbcontext.medicines.FirstOrDefault(m=>m.MedicineID==id);
            if(medicine==null)
            {
                return NotFound();
            }
            return Ok(medicine);
        }

        [HttpPost]
        public IActionResult PostMedicine([FromBody]MedicineDetails medicine)
        {
            _dbcontext.medicines.Add(medicine);
            _dbcontext.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult PutMedicine(int id,[FromBody] MedicineDetails medicine)
        {
            var newmedicine=_dbcontext.medicines.FirstOrDefault(m=>m.MedicineID==id);
            if(newmedicine==null)
            {
                return NotFound();
            }
            newmedicine.ExpiryDate=medicine.ExpiryDate;
            newmedicine.MedicineCount=medicine.MedicineCount;
            newmedicine.MedicineName=medicine.MedicineName;
            newmedicine.MedicinePrice=medicine.MedicinePrice;
            newmedicine.Image=medicine.Image;
            _dbcontext.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteMedicine(int id)
        {
            var medicine=_dbcontext.medicines.FirstOrDefault(m=>m.MedicineID==id);
            if(medicine==null)
            {
                return NotFound();
            }
            _dbcontext.medicines.Remove(medicine);
            _dbcontext.SaveChanges();
            return Ok();
        }
    }
}