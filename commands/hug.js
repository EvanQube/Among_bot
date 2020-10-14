module.exports = {
	name: 'hug',
	description: 'Hugs',
	execute(msg, args) {
    user = msg.mentions.users.first();
    author = msg.author.id;
    hugs = 12;
    hugsNumber = Math.floor(Math.random() * (hugs - 1)) + 1;
    msg.channel.send('<@' + author + '>' + '\xa0' + 'обнимает' + '\xa0' + '<@' + user.id + '>', {files: ['./hugs/' + hugsNumber + '.gif']})
    msg.delete().catch();

    if(!msg.mentions.users.first()) {
      msg.reply('Нужно отметить пользователся, которого вы хотите обнять.')
    }
  },
};
