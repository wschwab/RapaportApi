using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RapaportApi.Controllers
{
    public class DiamondController : Controller
    {
        [Route("diamonds")]
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public ActionResult DiamondController()
        {
            return Json(records);
        }

        [Route("add")]
        [HttpPost]
        public ActionResult AddDiamond(DiamondModel diamond)
        {
            records.Add(diamond);
            return Content("Diamond Successfully Added");
        }
    }
}
