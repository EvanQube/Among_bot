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


  if (message.content.startsWith(prefix + 'kick')) {

    const user = message.mentions.users.first();
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
      message.reply('Вы должны упомянуть человека, которого хотите кикнуть!');
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
