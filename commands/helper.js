module.exports = {
	name: 'helper',
	description: 'Жалоба хелперу',
	execute(msg, args, assist, tech) {
		//if(!assist || !tech || !admin) return msg.reply('у вас нет прав использовать эту команду');
		if(!args[0]) return msg.reply('необходимо пингануть нарушителя');
		if(!args[1]) return msg.reply('необходимо указать нарушение');
		const channelId = msg.channel.id;
		const author = msg.author.id;
		const helperChannel = msg.guild.channels.cache.get('765598395905605642');
		helperChannel.send(
			'Ассистент:' + '\xa0' + '<@' + author + '>' + '\n' +
			'Нарушитель:' + '\xa0' + args[0] + '\n' +
			'Нарушение:' + '\xa0' + args[1] + '\n' +
			'Канал:' + '\xa0' + '<#' + channelId + '>'
		)
    msg.delete().catch();
	},
};
