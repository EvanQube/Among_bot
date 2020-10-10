module.exports = {
	name: 'kick',
	description: 'Kick',
	execute(message, args) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick(args)
          .then(() => {
            message.reply(`Успешно кикнут ${user.tag}`);
          })
          .catch(err => {
            message.reply('Я не могу кинкуть этого человека!');
            console.error(err);
          });
      } else {
        message.reply("Этот чеоловек не на сервере!");
      }
    } else {
      message.reply("Вам нужно упомянуть человека для кика!");
    }
	},
};
