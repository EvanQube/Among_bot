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

client.on('message', message => {
if (message.content.startsWith(prefix + 'kick')) { //**This is the command, this says if someone says ?kick then pay attention to teh rest to teh bot.**\\

    const user = message.mentions.users.first(); // This says if you mention this user, it is talking about that user

    if (user) {

      const member = message.guild.member(user);

      if (member) {

        member.kick('Optional reason that will display in the audit logs').then(() => {

          message.reply(`Successfully kicked ${user.tag}, you should feel bad! They will never be able to rejoin until they click join again!`);
        }).catch(err => {

          message.reply('I was unable to kick the member. Check if their roles are higher then mine or if they have administrative permissions!');

          console.error(err);
        });
      } else {

        message.reply('That user isn\'t in this guild!');
      }

    } else {
      message.reply('You didn\'t mention the user to kick!'); //
}
})
