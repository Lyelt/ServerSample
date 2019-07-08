using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ServerSample.Controllers
{
    public class SampleController : Controller
    {
        [HttpPost]
        [AllowAnonymous]
        [Route("Sample/TestMethod")]
        public IActionResult TestMethod([FromBody]string testString)
        {
            Console.WriteLine("GOT INTO TestMethod");
            return Unauthorized();
        }
    }
}
