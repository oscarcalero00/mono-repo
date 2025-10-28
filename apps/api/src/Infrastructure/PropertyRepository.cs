using Api.Application.Interfaces;
using Api.Domain;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace Api.Infrastructure
{
    public class PropertyRepository : IPropertyRepository
    {
        private readonly IMongoCollection<Property> _collection;

        public PropertyRepository(IConfiguration config)
        {
            var client = new MongoClient(config["Mongo:ConnectionString"]);
            var database = client.GetDatabase(config["Mongo:DatabaseName"]);
            _collection = database.GetCollection<Property>("Properties");
        }

        public async Task<(IEnumerable<Property> Items, long Total)> GetPropertiesAsync(
            string? name,
            string? address,
            decimal? minPrice,
            decimal? maxPrice,
            int pageNumber = 1,
            int pageSize = 5)
        {
            var filterBuilder = Builders<Property>.Filter;
            var filter = filterBuilder.Empty;

            if (!string.IsNullOrWhiteSpace(name))
                filter &= filterBuilder.Regex(p => p.Name, new MongoDB.Bson.BsonRegularExpression(name, "i"));

            if (!string.IsNullOrWhiteSpace(address))
                filter &= filterBuilder.Regex(p => p.Address, new MongoDB.Bson.BsonRegularExpression(address, "i"));

            if (minPrice.HasValue)
                filter &= filterBuilder.Gte(p => p.Price, minPrice.Value);

            if (maxPrice.HasValue)
                filter &= filterBuilder.Lte(p => p.Price, maxPrice.Value);

            // 🔹 Total de coincidencias sin paginar
            var total = await _collection.CountDocumentsAsync(filter);

            // 🔹 Items paginados
            var items = await _collection.Find(filter)
                .Skip((pageNumber - 1) * pageSize)
                .Limit(pageSize)
                .ToListAsync();

            return (items, total);
        }

        public async Task<Property?> GetByIdAsync(string CodeInternal)
            => await _collection.Find(p => p.CodeInternal == CodeInternal).FirstOrDefaultAsync();

        public async Task CreateAsync(Property property)
            => await _collection.InsertOneAsync(property);
    }
}
