module.exports = {
	name: 'cut',
	description: 'Cut',
	execute(msg, args) {
    if(!msg.mentions.users.size) {
      msg.reply('нужно отметить пользователся, которому вы хотите отрезать.')
    }
    else {
    user = msg.mentions.users.first();
    author = msg.author.id;
    cuts = 4;
    cutsNumber = Math.floor(Math.random() * (cuts - 1)) + 1;
    msg.channel.send('<@' + author + '>' + '\xa0' + 'отрезал' + '\xa0' + '<@' + user.id + '>' + '\xa0' + 'пипиську', {files: ['./cuts/' 4 cutsNumber + '.gif']})
    msg.delete().catch();
  }
  },
};
