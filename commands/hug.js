module.exports = {
	name: 'hug',
	description: 'Hugs',
	execute(msg, args) {
    user = msg.mentions.users.first();
    author = msg.author.id;
    hugs = 3;
    hugsNumber = Math.floor(Math.random() * (hugs - 1)) + 1;
    msg.channel.send('<@' + user.id + '>' + '<@' + author + '>' + {files: ['./hugs/' + hugsNumber + '.jpg']})
	},
};
