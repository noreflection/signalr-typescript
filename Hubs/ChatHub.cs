using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace signalr_typescript.Hubs
{
    public class ChatHub : Hub
    {
        public async Task NewMessage(string username, string message)
        {
            await Clients.All.SendAsync("messageReceived", username, message);
        }
    }
}