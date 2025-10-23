using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace Api.Domain
{
    [BsonIgnoreExtraElements]
    public class Owner
    {
        [BsonElement("idOwner")]
        [BsonRepresentation(BsonType.ObjectId)]
        public string IdOwner { get; set; } = string.Empty;

        [BsonElement("name")]
        public string Name { get; set; } = string.Empty;

        [BsonElement("address")]
        public string Address { get; set; } = string.Empty;

        [BsonElement("photo")]
        public string Photo { get; set; } = string.Empty;

        [BsonElement("birthday")]
        public DateTime Birthday { get; set; }
    }
}
