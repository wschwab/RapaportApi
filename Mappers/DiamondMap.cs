using CsvHelper.Configuration;
using RapaportApi.Models;

namespace RapaportApi.Mappers
{
    public sealed class DiamondMap : ClassMap<DiamondModel>
    {
        public DiamondMap()
        {
            Map(m => m.Shape).Name(Constants.CsvHeaders.Shape);
            Map(m => m.Size).Name(Constants.CsvHeaders.Size);
            Map(m => m.Color).Name(Constants.CsvHeaders.Color);
            Map(m => m.Clarity).Name(Constants.CsvHeaders.Clarity);
            Map(m => m.Price).Name(Constants.CsvHeaders.Price);
            Map(m => m.ListPrice).Name(Constants.CsvHeaders.ListPrice);
        }
    }
}
