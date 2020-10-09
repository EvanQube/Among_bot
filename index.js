const { Client, MessageEmbed } = require("discord.js");
const client = new Client();
prefix = ">";
client.login(process.env.token);

client.on('ready', async() => {
  console.log('${client.user.username} is ready !')
  client.user.setActivity('>help', { type: 'WATCHING' })
});

client.on('message', msg => {
    if(msg.content === prefix + 'ping') {
        msg.channel.send('pong');
    }
})

client.on('message', msg => {
    if(msg.content === prefix + 'help') {
        const helpembed = new MessageEmbed()
        .setColor('BLUE')
        .setAuthor('Among Us по-русски', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.gg/C44mCXv')
        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .setTitle('Помощь')
        .setDescription('Список доступных команд')
        .addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Фан', value: '>rand - скидывает случайную картинку по Among Us'},
    )
    .setImage('https://i.imgur.com/wSTFkRM.png')
    .setTimestamp()
    .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
    msg.channel.send(helpembed)
    }
})

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

client.on('message', msg =>{
  if(msg.content === prefix + 'rand') {
  number = 3;
  let imageNumber = Math.floor(Math.random() *(number - 1 + 1)) + 1;
  msg.channel.send({files: ["./images/" + imageNumber + ".png"]})
}
});


client.on('message', msg => {
  let messageArray = msg.content.split(" ");
  let args = messageArray.slice(1);
  let cmd = messageArray[0];

  if(cmd === prefix + 'mute') {
    var member = msg.guild.member(msg.mention.users.first() || msg.guild.members.get(args[0]));
    if(!args[0]) return msg.reply('Вы должны упомянуть человека')

    let mainrole = msg.guild.role.cache.get('762780755259555862')
    let role = msg.guild.role.cache.get('764158862872936449')

    let time = args[1];
    if(!time) {return msg.reply('Вы должны указать время')}

    member.roles.remove(mainrole)
    member.roles.add(role)

    msg.channel.send(`@${member.user.tag} has now been muted for ${ms(ms(time))}`)

           setTimeout( function () {
               member.roles.add(mainrole)
               member.roles.remove(role);
               message.channel.send(`@${member.user.tag} has been unmuted.`)
           }, ms(time));
  }

});
