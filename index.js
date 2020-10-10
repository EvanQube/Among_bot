const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix, token } = require("./config.json")
const fs = require('fs');
client.commands = new Discord.Collection();
client.login(token);
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
});

client.on('ready', async() => {
  console.log('Bot is ready !')
  client.user.setActivity('>help', { type: 'PLAYING' })
});
