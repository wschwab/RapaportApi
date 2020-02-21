using System;
using System.Collections.Generic;
using System.Linq;
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

            Console.WriteLine();
            var csvParserService = new CsvParserService();
            EnvironmentVariablesExtensions path = "./Data/Diamonds.csv";
            EnvironmentVariablesExtensions result = csvParserService.ReadCsvFileToDiamondModel(path);

            var diamondToAdd = new DiamondModel();
            result.Add(diamondToAdd);
            Console.WriteLine();
            csvParserService.WriteNewCsvFile("./Data/Diamonds.csv", result);
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });

    }
}
