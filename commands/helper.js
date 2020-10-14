module.exports = {
  name: 'helper',
  description: 'Жалоба хелперу',
  execute(msg, args,) {
    if(!msg.member.roles.cache.get('763712278109224961')) return msg.reply('**У вас нет прав на использование этой команды!**');
    if (!args[0]) return msg.reply('необходимо пингануть нарушителя');
    if (!args[1]) return msg.reply('необходимо указать нарушение');
    const channelId = msg.channel.id;
    const author = msg.author.id;
    const helperChannel = msg.guild.channels.cache.get('765598395905605642');
    helperChannel.send(
      'Ассистент:' + '\xa0' + '<@' + author + '>' + '\n' +
      'Нарушитель:' + '\xa0' + args[0] + '\n' +
      'Нарушение:' + '\xa0' + args[1] + '\n' +
      'Канал:' + '\xa0' + '<#' + channelId + '>'
    )
    msg.channel.send('Жалоба успешно отправлена!')
    msg.delete().catch();
  },
};
