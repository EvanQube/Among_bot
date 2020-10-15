module.exports = {
  name: 'help',
  description: 'HelpEmbed',
  execute(msg, Discord) {
    const helpembed = new Discord.MessageEmbed()
      .setColor('ORANGE')
      .setAuthor('Among Us по-русски', 'https://i.imgur.com/Tc6QKK1.jpg', 'https://discord.gg/C44mCXv')
      .setTitle('Помощь')
      .setDescription('Список доступных команд')
      .addFields({
        name: 'Фан',
        value:
          prefix + 'cut - отрезать собеседнику пипиську' + "\n" +
          prefix + 'among - проверка работоспособности бота' + "\n" +
          prefix + 'randmeme - скидывает рандомный мем, связванный с сервером' + "\n" +
          prefix + 'idea - есть идеи для бота ? Эта команда для тебя!'
      }, )
      .setImage('https://i.imgur.com/AYlRRkt.png')
      .setTimestamp()
      .setFooter('Among Us по-русски', 'https://i.imgur.com/Tc6QKK1.jpg');
    msg.channel.send(helpembed)
    msg.delete().catch();
  },
};
