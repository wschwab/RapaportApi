using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

using RapaportApi.Models;

namespace RapaportApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();

            TextReader reader = new StreamReader("./Data/DiamondData.csv");
            var csvReader = new CsvReader(reader);
            var records = csvReader.GetRecords<DiamondModel>();

            Console.WriteLine();
            var csvParserService = new CsvParserService();
            EnvironmentVariablesExtensions path = "./Data/DiamondData.csv";
            EnvironmentVariablesExtensions result = csvParserService.ReadCsvFileToDiamondModel(path);

            var diamondToAdd = new DiamondModel();
            result.Add(diamondToAdd);
            Console.WriteLine();
            csvParserService.WriteNewCsvFile("./Data/DiamondData.csv", result);
        }

        public static void addDiamond(string shape, decimal size, string color, string clarity, decimal price, decimal listPrice)
        {
            try
            {
                using (System.IO.StreamWriter file = new System.IO.StreamWriter("./data/DiamondData.csv", true))
                {
                    file.WriteLine(shape + "," + size + "," + color + "," + clarity + "," + price + "," + listPrice);
                }
            }
            catch(Exception ex)
            {
                throw new ApplicationException("Oops: ", ex);
            }
        }

        public static string[] readRecords()
        {
            try
            {
                var records = new List<string[]>();
                string[] lines = System.IO.File.ReadAllLines("./data/DiamondData.csv");
                lines.Skip(1);
                foreach (string line in lines)
                    records.Add(line.Split(','))
                string json = new System.Web.Script.Serialization.JavaScriptSerializer().Serialize(records);
            }
            catch(Exception ex)
            {
                throw new ApplicationException("Oops: ", ex);
            }
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });

    }
}
