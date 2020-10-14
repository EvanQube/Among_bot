module.exports = {
	name: 'hug',
	description: 'Hugs',
	execute(msg, args) {
    user = msg.mentions.users.first();
    //hugs = 11;
    //hugsNumber = Math.floor(Math.random() * (hugs - 1)) + 1;
    msg.channel.send('<@' + user.id + '>')
	},
};
