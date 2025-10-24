using Api.Api.Controllers;
using Api.Application.Interfaces;
using Api.Domain;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Xunit;

namespace Api.Tests
{
    public class PropertiesControllerTests
    {
        private readonly Mock<IPropertyRepository> _mockRepo;
        private readonly PropertiesController _controller;

        public PropertiesControllerTests()
        {
            _mockRepo = new Mock<IPropertyRepository>();
            _controller = new PropertiesController(_mockRepo.Object);
        }

        [Fact]
        public async Task Get_ShouldReturnOkWithProperties()
        {
            // Arrange
            var properties = new List<Property>
            {
                new Property { Id = "1", Name = "House A", Address = "Main St", Price = 1000 },
                new Property { Id = "2", Name = "House B", Address = "Second St", Price = 2000 }
            };

            _mockRepo.Setup(r => r.GetPropertiesAsync(null, null, null, null))
                     .ReturnsAsync(properties);

            // Act
            var result = await _controller.Get(null, null, null, null);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returned = Assert.IsAssignableFrom<IEnumerable<Property>>(okResult.Value);
            Assert.Equal(2, returned.Count());
        }

        [Fact]
        public async Task GetById_ShouldReturnOk_WhenPropertyExists()
        {
            // Arrange
            var property = new Property { Id = "123", Name = "Test Property", Address = "Somewhere", Price = 1500 };

            _mockRepo.Setup(r => r.GetByIdAsync("123")).ReturnsAsync(property);

            // Act
            var result = await _controller.GetById("123");

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returned = Assert.IsType<Property>(okResult.Value);
            Assert.Equal("123", returned.Id);
        }

        [Fact]
        public async Task GetById_ShouldReturnNotFound_WhenPropertyDoesNotExist()
        {
            // Arrange
            _mockRepo.Setup(r => r.GetByIdAsync("999")).ReturnsAsync((Property?)null);

            // Act
            var result = await _controller.GetById("999");

            // Assert
            Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public async Task Create_ShouldReturnCreatedAtAction()
        {
            // Arrange
            var property = new Property { Id = "abc", Name = "New Property", Address = "Third St", Price = 3000 };

            _mockRepo.Setup(r => r.CreateAsync(property))
                     .Returns(Task.CompletedTask);

            // Act
            var result = await _controller.Create(property);

            // Assert
            var createdAt = Assert.IsType<CreatedAtActionResult>(result);
            var returned = Assert.IsType<Property>(createdAt.Value);
            Assert.Equal("abc", returned.Id);
            Assert.Equal(nameof(PropertiesController.GetById), createdAt.ActionName);
        }
    }
}
