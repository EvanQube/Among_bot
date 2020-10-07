const Discord = require("discord.js");
const client = new Discord.Client();
prefix = ">";
client.login(process.env.token);

client.on('ready', () => {
    console.log('Bot in on !');
})

client.on('message', msg => {
    if(msg.content === prefix + 'ping') {
        msg.channel.send('pong');
    }
})

client.on('message', msg => {
if (msg === prefix + "help") {
       const helpembed = new MessageEmbed()
           .setColor("BLUE")
           .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
           .setDescription(`
__**Command list**__
> \`play\` > **\`play [title/url]\`**
> \`search\` > **\`search [title]\`**
> \`skip\`, \`stop\`,  \`pause\`, \`resume\`
> \`nowplaying\`, \`queue\`, \`volume\``)
           .setFooter("©️ 2020 Zhycorp Nation", "https://api.zhycorp.xyz/assets/images/icon.jpg");
       message.channel.send(helpembed);
}
