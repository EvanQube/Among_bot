module.exports = {
  name: 'helper',
  description: 'Жалоба хелперу',
  execute(msg, args, ) {
    const channel = msg.guild.channel.get('760540460346638386');
    const admin = msg.member.hasPermission("ADMINISTRATOR");
    if (!msg.member.roles.cache.get('764864882390204456') || !admin) return msg.reply('**у вас нет прав на использование этой команды!**');
    if (!args[0]) return msg.reply('необходимо указать on или off')
    if(args[0] === 'on') {
      channel.setRateLimitPerUser(15,'lockdown lvl1')
    }
    if(args[0] === 'off') {
      channel.setRateLimitPerUser(0,'lockdown off')
    }
      msg.delete().catch();
    }
  },
};
