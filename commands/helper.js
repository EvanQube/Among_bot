module.exports = {
	name: 'helper',
	description: 'Заявка на хелпера',
	execute(msg, args) {
		helperChannel = msg.guild.channels.cache.get('765598395905605642')
		helperChannel.send(
			args[0] + '\n' +
			args[1] + '\n' +
			args[2] + '\n' +
			args[3]
		)
    msg.delete().catch();
	},
};
