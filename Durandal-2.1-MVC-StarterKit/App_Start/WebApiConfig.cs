using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Durandal_2._1_MVC_StarterKit
{
	public static class WebApiConfig
	{
		public static void Register(HttpConfiguration config)
		{
			config.Routes.MapHttpRoute(
				name: "DefaultApi",
				routeTemplate: "api/{controller}/{id}",
				defaults: new { id = RouteParameter.Optional }
			);
		}
	}
}
