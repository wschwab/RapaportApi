using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

using RapaportApi.Models;

namespace RapaportApi.Controllers
{
    public class DiamondController : Controller
    {
        [Route("diamonds")]
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public ActionResult ReadRecords()
        {
            return Content("Records read");
        }

        [Route("add")]
        [HttpPost]
        public ActionResult AddDiamond(string shape, decimal size, string color, string clarity, decimal price, decimal listPrice)
        {
            return Content("Diamond Successfully Added");            
        }
    }
}
