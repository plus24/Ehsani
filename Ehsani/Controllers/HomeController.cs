using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Configuration;
using System.Web.Mvc;

namespace Ehsani.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public JsonResult SendMsg(string name, string email, string phone, string message)
        {
            string Context = "From: "+name + System.Environment.NewLine + "EMAIL: " + email + System.Environment.NewLine+"Phone: " + phone + System.Environment.NewLine + message;
            ir.payamtube.smsSendWebService SMS = new ir.payamtube.smsSendWebService();

            // Enable Session Status
            SMS.CookieContainer = new System.Net.CookieContainer();
            // Login
            SMS.Login(WebConfigurationManager.AppSettings["smsuserName"], WebConfigurationManager.AppSettings["smspassWord"], WebConfigurationManager.AppSettings["smsdomainName"]);
            /////////////////////////////////////////////////////////////////////////////////////////////////////////
            // Send SMS
            long SmsId = SMS.SendSingleSms(Context, WebConfigurationManager.AppSettings["smsreciverNumber"], WebConfigurationManager.AppSettings["smssenderNumber"], ir.payamtube.SmsMode.SaveInPhone);
            //Get Credit
            string Credit = SMS.getCredit();
            if(int.Parse(Credit)<10000)
                SMS.SendSingleSms("Dear Masoud\r\n Increase your sms credit balance for your personal websites...", WebConfigurationManager.AppSettings["smsreciverNumber"], WebConfigurationManager.AppSettings["smssenderNumber"], ir.payamtube.SmsMode.SaveInPhone);
            //sendSms x = new sendSms();
            return Json(new { res = "OK" });
        }
    }
}