const Discord = require("discord.js");
const client = new Discord.Client();
prefix = ">";
client.login(process.env.token);

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'among'){
        client.commands.get('among').execute(message, args);
    };

    else if(command === 'help'){
        client.commands.get('help').execute(message, args);
    };

    else if(command === 'rand') {
      client.commands.get('rand').execute(message, args);
    }
});

client.on('ready', async() => {
  console.log('${client.user.username} is ready !')
  client.user.setActivity('>help', { type: 'WATCHING' })
});
