using System.Collections.Generic;
using RapaportApi.Models;


namespace RapaportApi.Services
{
    public interface ICsvParserService
    {
        List<DiamondModel> ReadCsvFileToDiamondModel(string path);
        void WriteNewCsvFile(string path, List<DiamondModel> diamondModel);
    }
}
