const Discord = require("discord.js");
const client = new Discord.Client();
prefix = ">";
client.login(process.env.token);

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
  game:{
    name:'Слушает >help'
  },
  status:'online'
});
 });

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

//Команда Kick
client.on('message', message => {

  if (!message.guild) return;


  if (message.content.startsWith(prefix + 'kick')) { //**This is the command, this says if someone says ?kick then pay attention to teh rest to teh bot.**\\

    const user = message.mentions.users.first(); // This says if you mention this user, it is talking about that user

    if (user) {

      const member = message.guild.member(user);

      if (member) {

        member.kick('Причина будет написана в логе аудита').then(() => {

          message.reply(`Кикнут ${user.tag}`);
        }).catch(err => {

          message.reply('Я не могу кикнуть этого человека, моя роль должна быть выше!');

          console.error(err);
        });
      } else {

        message.reply('Этот человек не на сервере!');
      }

    } else {
      message.reply('Вы должны упомянуть человека, которого хотите кикнуть!'); // Thus is creating a message so that you know if you failed
// The / is to show the script that the (') is not the end of it
    }
  }
});


client.on('message', msg => {
    if (msg.content === prefix + 'report') {
      let report = msg.content.split(1);
       msg.channels.cache.get('762780755259555865').send(report.join());
    }
});
