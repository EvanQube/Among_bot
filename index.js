const Discord = require("discord.js");
const client = new Discord.Client();
prefix = ">";
const { prefix, token } = require('.config.json')
client.login(process.env.token);

client.on('ready', () => {
    console.log('Bot in on !');
})

client.on('message', msg => {
    if(msg.content === prefix + 'ping') {
        msg.channel.send('pong');
    }
})

client.on('message', msg => {
    if(msg.content === prefix + 'help') {
        const helpembed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setAuthor('Among Us по-русски', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.gg/C44mCXv')
        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .setTitle('Помощь')
        .setDescription('Список доступных команд')
        .addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Музыкальный бот', value: 'Его команды', inline: true },
		{ name: 'JuniperBot', value: 'Его команды', inline: true },
    )
    .setImage('https://i.imgur.com/wSTFkRM.png')
    .setTimestamp()
    .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
    msg.channel.send(helpembed)
    }
})


client.on('message', msg => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();

else if (command === 'args-info') {
	if (!args.length) {
		return message.channel.send(`Вы не написали аргументы, ${message.author}!`);
	}

	message.channel.send(`Command name: ${command}\nArguments: ${args}`);
}
})
