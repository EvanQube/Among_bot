const Discord = require("discord.js");
const client = new Discord.Client();
prefix = ">";
bot.login(process.env.token);

bot.on('ready', () => {
    console.log('Bot in on !');
})

bot.on('message', msg => {
    if(msg.content === prefix + 'ping') {
        msg.channel.send('pong');
    }
})
