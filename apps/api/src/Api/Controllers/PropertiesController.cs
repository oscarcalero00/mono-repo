using Api.Application.Interfaces;
using Api.Domain;
using Microsoft.AspNetCore.Mvc;

namespace Api.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PropertiesController : ControllerBase
    {
        private readonly IPropertyRepository _repository;

        public PropertiesController(IPropertyRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> Get(
            [FromQuery] string? name,
            [FromQuery] string? address,
            [FromQuery] decimal? minPrice,
            [FromQuery] decimal? maxPrice,
            [FromQuery] int pageNumber = 1,
            [FromQuery] int pageSize = 5)
        {
            var (items, total) = await _repository.GetPropertiesAsync(
                name, address, minPrice, maxPrice, pageNumber, pageSize);

            return Ok(new
            {
                total,
                items
            });
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id)
        {
            var property = await _repository.GetByIdAsync(id);
            if (property == null) return NotFound();
            return Ok(property);
        }

        [HttpPost]
        public async Task<IActionResult> Create(Property property)
        {
            await _repository.CreateAsync(property);
            return CreatedAtAction(nameof(GetById), new { id = property.Id }, property);
        }
    }
}
