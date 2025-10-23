using MongoDB.Bson.Serialization.Attributes;
using System;

namespace Api.Domain
{
    [BsonIgnoreExtraElements]
    public class PropertyTrace
    {
        [BsonElement("dateSale")]
        public DateTime DateSale { get; set; }

        [BsonElement("value")]
        public decimal Value { get; set; }

        [BsonElement("tax")]
        public decimal Tax { get; set; }

        [BsonElement("name")]
        public string Name { get; set; } = string.Empty;
    }
}
