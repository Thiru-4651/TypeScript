using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace APIForOnlineLibrary.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookDetailsController:ControllerBase
    {
        private readonly ApplicationDBContext _dbcontext;
        public BookDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbcontext=applicationDBContext;
        }

        // private static List<BookDetails>_books=new List<BookDetails>
        // {
        //     new BookDetails{BookID=1,BookName="TypeScript",AuthorName="Itachi",BookCount=5},
        //     new BookDetails{BookID=2,BookName="DataBase",AuthorName="Minato",BookCount=10},
        //     new BookDetails{BookID=3,BookName="API",AuthorName="Jiraya",BookCount=15},
        //     new BookDetails{BookID=4,BookName="JavaScript",AuthorName="Obito",BookCount=20},
        //     new BookDetails{BookID=5,BookName="C#",AuthorName="Madara",BookCount=30}
        // };
        
        [HttpGet]
        public IActionResult GetUsers()
        {
            return Ok(_dbcontext.books.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetMedicine(int id)
        {
            var medicine = _dbcontext.books.FirstOrDefault(m => m.BookID == id);
            if (medicine == null)
            {
                return NotFound();
            }
            return Ok(medicine);
        }

        [HttpPost]
        public IActionResult PostMedicine([FromBody] BookDetails medicine)
        {
            _dbcontext.books.Add(medicine);
            _dbcontext.SaveChanges();
            // You might want to return CreatedAtAction or another appropriate response
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult PutMedicine(int id, [FromBody] BookDetails medicine)
        {
            var index = _dbcontext.books.FirstOrDefault(m => m.BookID == id);
            if (index == null)
            {
                return NotFound();
            }
            index.AuthorName=medicine.AuthorName;
            index.BookCount=medicine.BookCount;
            index.BookName=medicine.BookName;
            _dbcontext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteContact(int id)
        {
            var medicine = _dbcontext.books.FirstOrDefault(m => m.BookID == id);    
            if (medicine == null)
            {
                return NotFound();
            }
            _dbcontext.books.Remove(medicine);
            _dbcontext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }
    }
}