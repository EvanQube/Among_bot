module.exports = {
	name: 'tyan',
	description: 'Выдача роли Тян',
	execute(msg, args) {
		let role = msg.guild.roles.cache.get('760097698442379284');
    let member = msg.mentions.members.first();
    member.roles.add(role).catch(console.error);
	},
};
