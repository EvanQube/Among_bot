module.exports = {
	name: 'kick',
	description: 'Kick',
	execute(message, args) {
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        member
          .kick(args)
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('Я не могу кинкуть этого человека!');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("Этот чеоловек не на сервере!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("Вам нужно упомянуть человека для кика!");
    }
	},
};
