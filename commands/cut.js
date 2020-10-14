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
    msg.channel.send('<@' + author + '>' + '\xa0' + 'отрезал' + '\xa0' + '<@' + user.id + '>' + '\xa0' + 'пипиську', {files: ['cut.jpeg']})
    msg.delete().catch();
  }
  },
};
