const Discord = require("discord.js");
const client = new Discord.Client();
prefix = ">";
client.login(process.env.token);

client.on('ready', () => {
    console.log('Bot in on !');
})

client.on('message', msg => {
    if(msg.content === prefix + 'ping') {
        msg.channel.send('pong');
    }
})
