const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });

const client_id = "ENTER YOUR APPLICATION ID HERE"
const large_image = "ENTER THE NAME OF THE IMAGE ASSET HERE"
const discord_invite = "ENTER DISCORD INVITE HERE"
const description = "ENTER DESCRIPTION HERE"

client.on('ready', () =>
{
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            assets: {
                large_image: large_image
            },
            details: description,
            buttons: [
                { label: 'Join Me!', url: discord_invite }
            ]
        }
    });
    console.log('started!');
});
client.login({ clientId: client_id });
