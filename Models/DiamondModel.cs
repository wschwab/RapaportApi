using CsvHelper.Configuration.Attributes;

namespace RapaportApi.Models
{
    public class DiamondModel
    {
        [Name(Constants.CsvHeaders.Shape)]
        public string Shape { get; set; }
        [Name(Constants.CsvHeaders.Size)]
        public decimal Size { get; set; }
        [Name(Constants.CsvHeaders.Color)]
        public string Color { get; set; }
        [Name(Constants.CsvHeaders.Clarity)]
        public string Clarity { get; set; }
        [Name(Constants.CsvHeaders.Price)]
        public decimal Price { get; set; }
        [Name(Constants.CsvHeaders.ListPrice)]
        public decimal ListPrice { get; set; }
    }
}
