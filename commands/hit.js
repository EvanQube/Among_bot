module.exports = {
	name: 'hit',
	description: 'Hit',
	execute(msg, args) {
    if(!msg.mentions.users.size) {
      msg.reply('нужно отметить пользователся, которого вы хотите ударить.')
    }
    else {
    user = msg.mentions.users.first();
    author = msg.author.id;
    hits = 13;
    hitsNumber = Math.floor(Math.random() * (hits - 1)) + 1;
    msg.channel.send('<@' + author + '>' + '\xa0' + 'ударил' + '\xa0' + '<@' + user.id + '>', {files: ['./hits/' + hitsNumber + '.gif']})
    msg.delete().catch();
  }
  },
};
