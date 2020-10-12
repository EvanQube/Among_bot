exports.run = async (client, message, args) => {

  if(!message.member.roles.cache.get('759402969803390997') || !message.member.roles.cache.get('756567959526309961') || !message.member.roles.cache.get('759399027661209610') || !message.member.roles.cache.get('761188475755167794') || !message.member.roles.cache.get('756567959526309962')) {
    return message.channel.send({embed: {color: "RED", description: "You can't use this command!"}})
  }

  let user = message.mentions.users.first();
  if (!user) return message.channel.send({embed: {color: "RED", description: "You need to mention the user!"}});

  let nick = args.slice(1).join(" ");
  if (!nick) return message.channel.send({embed: {color: "RED", description: "You need to input the nickname!"}});

  let member = message.guild.members.cache.get(user.id);

  await member.setNickname(nick).catch(err => message.channel.send({embed: {color: "RED", description: `Error: ${err}`}}));
  return message.channel.send({embed: {color: "GREEN", description: `Successfully changed **${user.tag}** nickname to **${nick}**`}});
}

exports.help = {
  name: "setnickname",
  description: "Set a user nickname.",
  usage: "/setnickname <@user> <nick>",
  example: "/setnickname @ray#9999 hoisted"
}

exports.conf = {
  aliases: ["setnick"],
  cooldown: 5
}
