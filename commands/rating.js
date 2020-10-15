module.exports = {
  name: 'rating',
  description: 'Включение режима игр на рейтинг',
  execute(msg, args, ) {
    const channel = msg.guild.channels.cache.get('760540460346638386');
    if (!msg.member.roles.cache.get('759399027661209610')) return msg.reply('**у вас нет прав на использование этой команды!**');
    if (!args[0]) return msg.reply('необходимо указать on или off')
    if(args[0] === 'on') {
      channel.setRateLimitPerUser(15,'lockdown lvl1')
      msg.channel.send('**Медленный режим поставлен**')
    }
    if(args[0] === 'off') {
      channel.setRateLimitPerUser(0,'lockdown off')
      msg.channel.send('**Медленный режим убран**')
    }
      msg.delete().catch();
    }
};
