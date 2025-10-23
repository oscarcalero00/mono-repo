using MongoDB.Bson.Serialization.Attributes;

namespace Api.Domain
{
    [BsonIgnoreExtraElements]
    public class PropertyImage
    {
        [BsonElement("file")]
        public string File { get; set; } = string.Empty;

        [BsonElement("enabled")]
        public bool Enabled { get; set; }
    }
}
