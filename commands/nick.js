module.exports = {
	name: 'nick',
	description: 'Change nickname',
	execute(client, message, args) {
    if(!message.member.roles.cache.get('756567959526309961') || !message.member.roles.cache.get('759399027661209610') || !message.member.roles.cache.get('759399027661209610') || !message.member.roles.cache.get('761188475755167794')) return;
    if(!args[0]) return message.channel.send('**Вы должны упомянуть человека, которому хотите изменить ник**')
    message.guild.members.get(message.mentions.users.first()).setNickname(args);
	},
};
