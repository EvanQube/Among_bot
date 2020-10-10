  module.exports = {
  	name: 'rand',
  	description: 'randomImage',
  	execute(message, args) {
      const user = message.mentions.users.first();
          if (user) {
            const member = message.guild.member(user);
            if (member) {
              member
                .ban({
                  reason: args,
                })
                .then(() => {
                  message.reply(`Успешно забанен ${user.tag}`);
                })
                .catch(err => {
                  message.reply('Я не могу забанить этого человека!');
                  console.error(err);
                });
            } else {
              message.reply("Человек не на сервере!");
            }
          } else {
            message.reply("Вам необходимо упомянуть человека для бана!");
          }
  	},
  };
