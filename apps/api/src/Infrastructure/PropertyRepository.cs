using Api.Application.Interfaces;
using Api.Domain;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace Api.Infrastructure;

public class PropertyRepository : IPropertyRepository
{
    private readonly IMongoCollection<Property> _collection;

    public PropertyRepository(IConfiguration config)
    {
        var client = new MongoClient(config["Mongo:ConnectionString"]);
        var database = client.GetDatabase(config["Mongo:DatabaseName"]);
        _collection = database.GetCollection<Property>("Properties");
    }

    public async Task<IEnumerable<Property>> GetPropertiesAsync(string? name, string? address, decimal? minPrice, decimal? maxPrice)
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

        return await _collection.Find(filter).ToListAsync();
    }

    public async Task<Property?> GetByIdAsync(string id)
        => await _collection.Find(p => p.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Property property)
        => await _collection.InsertOneAsync(property);
}
