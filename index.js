const Discord = require("discord.js");
const client = new Discord.Client();
prefix = ">";
bot.login(process.env.token);

bot.on('ready', () => {
    console.log('Bot in on !');
})

bot.on('message', msg => {
    if(msg.content === prefix + 'ping') {
        msg.channel.send('pong');
    }
})

bot.on('message', msg => {
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
       msg.channel.send(helpembed);
})
