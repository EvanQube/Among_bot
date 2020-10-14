module.exports = {
	name: 'hug',
	description: 'Hugs',
	execute(msg, args) {
    user = msg.mentions.users.first();
    author = msg.author();
    hugs = 3;
    hugsNumber = Math.floor(Math.random() * (hug - 1)) + 1;
    msg.channel.send('<@' + user.id + '>' + '<@' + author.id + '>' + {files: ['./hugs/' + hugsNumber + '.jpg'])
	},
};
