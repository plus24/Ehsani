using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Ehsani.Startup))]
namespace Ehsani
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
