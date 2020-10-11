module.exports = {
	name: 'nick',
	description: 'Change nickname',
	execute(message, args) {
		message.member.setNickname(args);
	},
};
