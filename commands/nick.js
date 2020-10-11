if (message.content.includes('changeNick')) {
    if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!');
    message.member.setNickname(message.content.replace('changeNick ', ''));
}


module.exports = {
	name: 'nick',
	description: 'Change nickname',
	execute(message, args) {
		message.member.setNickname(args);
	},
};
