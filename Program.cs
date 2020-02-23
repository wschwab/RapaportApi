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
using Newtonsoft.Json;

using RapaportApi.Models;
using RapaportApi.Controllers;

namespace RapaportApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static void AddDiamond(string shape, decimal size, string color, string clarity, decimal price, decimal listPrice)
        {
            try
            {
                StreamWriter sw = new StreamWriter("./data/DiamondData.csv", true);
                {
                    sw.WriteLine(shape + "," + size + "," + color + "," + clarity + "," + price + "," + listPrice);
                }
            }
            catch(Exception ex)
            {
                throw new ApplicationException("Oops: ", ex);
            }
        }

        public static string[] ReadRecords()
        {
            try
            {
                var records = new List<string[]>();
                string[] lines = File.ReadAllLines("./data/DiamondData.csv");
                lines.Skip(1);
                JsonSerializer sz = new JsonSerializer();
                using (StreamWriter sw = new StreamWriter("./data/DiamondData.csv"))
                using (JsonWriter writer = new JsonTextWriter(sw))
                {
                    sz.Serialize(writer, lines);
                }
                return lines;
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
