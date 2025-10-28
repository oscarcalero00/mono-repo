using Api.Domain;

namespace Api.Application.Interfaces
{
    public interface IPropertyRepository
    {
        Task<(IEnumerable<Property> Items, long Total)> GetPropertiesAsync(
            string? name,
            string? address,
            decimal? minPrice,
            decimal? maxPrice,
            int pageNumber = 1,
            int pageSize = 5);

        Task<Property?> GetByIdAsync(string id);
        Task CreateAsync(Property property);
    }
}
