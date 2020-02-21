using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using CsvHelper;
using RapaportApi.Mappers;
using RapaportApi.Models;

namespace RapaportApi.Services
{
    public class CsvParserService : ICsvParserService
    {
        public List<DiamondModel> ReadCsvFileToDiamondModel(string path)
        {
            try
            {
                using (var reader = new StreamReader(path, Encoding.Default))
                using (var csv = new CsvReader(reader))
                {
                    csv.Configuration.RegisterClassMap<DiamondMap>();
                    var records = csv.GetRecords<DiamondModel>().ToList();
                    return records;
                }
            }
            catch (UnauthorizedAccessException e)
            {
                throw new Exception(e.Message);
            }
            catch (FieldValidationException e)
            {
                throw new Exception(e.Message);
            }
            catch (CsvHelperException e)
            {
                throw new Exception(e.Message);
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public void WriteNewCsvFile(string path, List<DiamondModel> diamondModel)
        {
            using (StreamWriter sw = new StreamWriter(path, false, new UTF8Encoding(true)))
            using (CsvWriter cw = new CsvWriter(sw))
            {
                cw.WriteHeader<DiamondModel>();
                cw.NextRecord();
                foreach (DiamondModel dm in diamondModel)
                {
                    cw.WriteRecord<DiamondModel>(dm);
                    cw.NextRecord();
                }
            }
        }
    }
}
