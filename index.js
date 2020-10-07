const Discord = require("discord.js");
const bot = new Discord.Client();
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

bot.on('message', msg => {
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
