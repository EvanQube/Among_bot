module.exports = {
	name: 'helper',
	description: 'Заявка на хелпера',
	execute(msg, args, assist, tech) {
		//if(!assist || !tech || !admin) return msg.reply('у вас нет прав использовать эту команду');
		if(!args[1]) return msg.reply('необходимо пингануть нарушителя');
		if(!args[2]) return msg.reply('необходимо указать нарушение');
		const channelId = msg.channel.id;
		const author = msg.author.id;
		const helperChannel = msg.guild.channels.cache.get('765598395905605642');
		helperChannel.send(
			'<@' + author + '>' + '\n' +
			args[1] + '\n' +
			args[2] + '\n' +
			'<#' + channelId + '>'
		)
    msg.delete().catch();
	},
};
