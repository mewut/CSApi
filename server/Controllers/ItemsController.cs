using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using server.Models;

namespace server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemsController : ControllerBase
    {
        private static readonly List<Item> _items = new List<Item>();

        [HttpGet]
        public IEnumerable<Item> Get()
        {
            return _items;
        }

        [HttpPost]
        public void Post([FromBody] Item item)
        {
            _items.Add(item);
        }
    }
}