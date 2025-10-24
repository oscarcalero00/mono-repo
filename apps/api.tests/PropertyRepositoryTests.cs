using Xunit;
using FluentAssertions;
using Api.Domain;
using Api.Infrastructure;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using Moq;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Api.Tests
{
    public class PropertyRepositoryTests
    {
        private readonly Mock<IMongoCollection<Property>> _mockCollection;
        private readonly PropertyRepository _repository;

        public PropertyRepositoryTests()
        {
            var inMemorySettings = new Dictionary<string, string?>
            {
                {"Mongo:ConnectionString", "mongodb://localhost:27017"},
                {"Mongo:DatabaseName", "testdb"}
            };

            var configuration = new ConfigurationBuilder()
                .AddInMemoryCollection(inMemorySettings!)
                .Build();

            _mockCollection = new Mock<IMongoCollection<Property>>();

            // 🔧 Inyectar colección simulada al repositorio real
            _repository = new PropertyRepositoryForTests(configuration, _mockCollection.Object);
        }

        [Fact]
        public async Task CreateAsync_ShouldCallInsertOne()
        {
            var property = new Property { Id = "1", Name = "Casa", Address = "Calle 1", Price = 500000 };

            await _repository.CreateAsync(property);

            _mockCollection.Verify(
                c => c.InsertOneAsync(property, null, default),
                Times.Once);
        }

        [Fact]
        public async Task GetByIdAsync_ShouldReturnExpectedProperty()
        {
            // Arrange
            var expected = new Property { Id = "abc123", Name = "Casa Prueba" };

            var mockCursor = new Mock<IAsyncCursor<Property>>();
            mockCursor.SetupSequence(c => c.MoveNextAsync(It.IsAny<CancellationToken>()))
                .ReturnsAsync(true)
                .ReturnsAsync(false);
            mockCursor.SetupGet(c => c.Current).Returns(new List<Property> { expected });

            _mockCollection
                .Setup(c => c.FindAsync(
                    It.IsAny<FilterDefinition<Property>>(),
                    It.IsAny<FindOptions<Property, Property>>(),
                    It.IsAny<CancellationToken>()))
                .ReturnsAsync(mockCursor.Object);

            // Act
            var result = await _repository.GetByIdAsync("abc123");

            // Assert
            result.Should().NotBeNull();
            result!.Id.Should().Be("abc123");
            result.Name.Should().Be("Casa Prueba");
        }

        [Fact]
        public async Task GetPropertiesAsync_ShouldReturnMatchingProperties()
        {
            // Arrange
            var expectedList = new List<Property>
            {
                new Property { Id = "1", Name = "Beach House", Address = "Miami", Price = 500000 },
                new Property { Id = "2", Name = "Mountain Cabin", Address = "Denver", Price = 300000 }
            };

            var mockCursor = new Mock<IAsyncCursor<Property>>();
            mockCursor.SetupSequence(c => c.MoveNextAsync(It.IsAny<CancellationToken>()))
                .ReturnsAsync(true)
                .ReturnsAsync(false);
            mockCursor.SetupGet(c => c.Current).Returns(expectedList);

            _mockCollection
                .Setup(c => c.FindAsync(
                    It.IsAny<FilterDefinition<Property>>(),
                    It.IsAny<FindOptions<Property, Property>>(),
                    It.IsAny<CancellationToken>()))
                .ReturnsAsync(mockCursor.Object);

            // Act
            var result = await _repository.GetPropertiesAsync("House", null, null, null);

            // Assert
            result.Should().NotBeNull();
            result.Should().HaveCount(2);
        }
    }

    /// <summary>
    /// Repositorio de prueba con inyección directa de la colección mockeada.
    /// </summary>
    internal class PropertyRepositoryForTests : PropertyRepository
    {
        public PropertyRepositoryForTests(IConfiguration config, IMongoCollection<Property> mockCollection)
            : base(config)
        {
            var field = typeof(PropertyRepository)
                .GetField("_collection", System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);

            field!.SetValue(this, mockCollection);
        }
    }
}
