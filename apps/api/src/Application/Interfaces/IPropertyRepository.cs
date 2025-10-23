using Api.Domain;

namespace Api.Application.Interfaces;

public interface IPropertyRepository
{
    Task<IEnumerable<Property>> GetPropertiesAsync(string? name, string? address, decimal? minPrice, decimal? maxPrice);
    Task<Property?> GetByIdAsync(string id);
    Task CreateAsync(Property property);
}
