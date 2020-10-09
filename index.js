const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '>';
const token = process.env.token;
const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
  const command = require('./commands/${file}');

  client.commands.set(command.name, command)
}

client.on('ready', async() => {
  console.log('${client.user.username} is ready !')
  client.user.setActivity('>help', { type: 'WATCHING' })
});

client.on('message', msg => {
  if(msg.content === prefix + 'ping') {
    client.commands.get('ping').execute(message, args);
  }

});
