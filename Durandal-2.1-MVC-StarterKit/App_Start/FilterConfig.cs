using System.Web;
using System.Web.Mvc;

namespace Durandal_2._1_MVC_StarterKit
{
	public class FilterConfig
	{
		public static void RegisterGlobalFilters(GlobalFilterCollection filters)
		{
			filters.Add(new HandleErrorAttribute());
		}
	}
}