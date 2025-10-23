using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;

namespace Api.Domain
{
    [BsonIgnoreExtraElements]
    public class Property
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = string.Empty;

        [BsonElement("name")]
        public string Name { get; set; } = string.Empty;

        [BsonElement("address")]
        public string Address { get; set; } = string.Empty;

        [BsonElement("price")]
        public decimal Price { get; set; }

        [BsonElement("codeInternal")]
        public string CodeInternal { get; set; } = string.Empty;

        [BsonElement("year")]
        public int Year { get; set; }

        [BsonElement("owner")]
        public Owner Owner { get; set; } = new();

        [BsonElement("images")]
        public List<PropertyImage> Images { get; set; } = new();

        [BsonElement("traces")]
        public List<PropertyTrace> Traces { get; set; } = new();
    }
}
