module.exports = {
	name: 'hug',
	description: 'Hugs',
	execute(msg, args) {
    user = msg.mentions.users.first();
    author = msg.author.id;
    hugs = 2;
    hugsNumber = Math.floor(Math.random() * (hugs - 1)) + 1;
    msg.channel.send('<@' + author + '>''<@' + '\xa0' + user.id + '>' + '\xa0' + {files: ['./hugs/' + hugsNumber + '.gif']})
	},
};
