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
    }

    else if(command === 'rand') {
      client.commands.get('rand').execute(message, args);
    }

    else if(command === 'kick') {
      client.commands.get('kick').execute(message, args);
    }
});

client.on('ready', async() => {
  console.log('Bot is ready !')
  client.user.setActivity('>help', { type: 'WATCHING' })
});


client.on('message', msg =>{
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;
    if(msg.content === prefix + 'help') {
    const helpembed = new Discord.MessageEmbed()
    .setColor('ORANGE')
.setAuthor('Among Us по-русски', 'https://i.imgur.com/Tc6QKK1.jpg', 'https://discord.gg/C44mCXv')
.setTitle('Помощь')
.setDescription('Список доступных команд')
.addFields(
{ name: '\u200B', value: '\u200B' },
{ name: 'Фан', value: '>rand - скидывает случайную картинку по Among Us' + "\n" + '>among - проверка работоспособности бота'},
)
.setImage('https://i.imgur.com/AYlRRkt.png')
.setTimestamp()
.setFooter('Among Us по-русски', 'https://i.imgur.com/Tc6QKK1.jpg');
msg.channel.send(helpembed)
}
});
