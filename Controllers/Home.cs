using Microsoft.AspNetCore.Mvc;

namespace JavaScript.Controllers
{
    public class Home : Controller
    {
        // GET
        public IActionResult Index()
        {

            return View();
        }
    }
}