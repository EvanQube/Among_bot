const Discord = require("discord.js");
const client = new Discord.Client();
prefix = ">";
client.login(process.env.token);

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('message', msg =>{
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;

    const tech = msg.member.roles.cache.get('759381562079838288');
    const zam = msg.member.roles.cache.get('761188475755167794');
    const admin = msg.member.roles.cache.get('759399027661209610');
    const moderator = msg.member.roles.cache.get('756567959526309961');
    const helper = msg.member.roles.cache.get('759402969803390997');

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'among'){ //Проверка работоспособности
        client.commands.get('among').execute(msg, args);
    }

    else if(command === 'randmeme') { //рандомные мемы
      client.commands.get('randmeme').execute(msg, args);
    }

    else if(command === 'prefix') { //Изменение префикса
      if(msg.member.roles.cache.get('759381562079838288') || msg.member.roles.cache.get('759399027661209610') || msg.member.roles.cache.get('761188475755167794') || msg.member.roles.cache.get('756567959526309962')) {

      if(args === 'default') {
        prefix = ">";
      }
      else {
      prefix = args;
      }}
      else {
      msg.channel.send('**У вас нет прав на использование этой команды!**')}}

      else if(command === 'idea') { //Идеи
      client.users.cache.get('352389928543584256').send(args);
      msg.delete().catch()}

      else if(command === 'helperrules') {
        if(admin || zam || tech) {
          client.commands.get('helper').execute(msg);
        }
        else {
          msg.channel.send('**У вас нет прав на использование этой команды!**')
        }
      }

    else if(command === 'helper') { //набор на хелперов
    msg.guild.channels.cache.get('765494369473003531').send(`${args}`);
    msg.delete().catch();
  }

    else if(command === 'role') {
        if(msg.member.roles.cache.get('759381562079838288') || msg.member.roles.cache.get('759399027661209610') || msg.member.roles.cache.get('761188475755167794') || msg.member.roles.cache.get('756567959526309962')) {
          let role = msg.guild.roles.cache.get('760097698442379284');
          let member = msg.mentions.members.first();
          member.roles.add(role);
        }
        else {
          msg.channel.send('**У вас нет прав на использование этой команды!**')}}
});

client.on('ready', async() => {
  console.log('Bot is on !')
  client.user.setPresence({
    status: 'idle',
    activity: {
        name: '>help | Автор - Evan🎃#6456',
        type: 'LISTENING',
        url: 'https://www.twitch.tv/monstercat'
    }
})
});

client.on('guildMemberAdd', member => {

    let myGuild = client.guilds.cache.get('756567959526309958')
 // Server Id Goes Here

    let membercount = myGuild.memberCount.toLocaleString();

    const membercountchannel = myGuild.channels.cache.get('765263675434074123');
 // Channel Id Goes Here

    membercountchannel.setName(`Участников:` + member.guild.memberCount)


})



client.on('guildMemberRemove', member => {

    let myGuild = client.guilds.cache.get('756567959526309958')
 // Server Id Goes Here

    let membercount = myGuild.memberCount.toLocaleString();

    const membercountchannel = myGuild.channels.cache.get('765263675434074123');
 // Channel Id Goes Here

    membercountchannel.setName(`Участников:` + member.guild.memberCount)

})


client.on('message', msg =>{
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;
    if(msg.content === prefix + 'help') {
    const helpembed = new Discord.MessageEmbed()
    .setColor('ORANGE')
.setAuthor('Among Us по-русски', 'https://i.imgur.com/Tc6QKK1.jpg', 'https://discord.gg/C44mCXv')
.setTitle('Помощь')
.setDescription('Список доступных команд')
.addFields(
{ name: '\u200B', value: '\u200B' },
{ name: 'Фан', value:
prefix + 'rand - скидывает случайную картинку по Among Us _(временно не работает)_' + "\n" +
prefix + 'among - проверка работоспособности бота'+ "\n" +
prefix + 'randmeme - скидывает рандомный мем, связванный с сервером' + "\n" +
prefix + 'idea - есть идеи для бота ? Эта команда для тебя!'
},
)
.setImage('https://i.imgur.com/AYlRRkt.png')
.setTimestamp()
.setFooter('Among Us по-русски', 'https://i.imgur.com/Tc6QKK1.jpg');
msg.channel.send(helpembed)
msg.delete().catch();
}
});


client.on('message', msg =>{

    if(!msg.content.startsWith(prefix) || msg.author.bot) return;
    if(msg.content === prefix + 'rules') {
      if(msg.member.roles.cache.get('759381562079838288') || msg.member.roles.cache.get('759399027661209610') || msg.member.roles.cache.get('761188475755167794') || msg.member.roles.cache.get('756567959526309962')) {
    const rulesembed = new Discord.MessageEmbed()
    .setColor('ORANGE')
.setAuthor('Among Us по-русски', 'https://i.imgur.com/Tc6QKK1.jpg', 'https://discord.gg/C44mCXv')
.setTitle('**Правила сервера**')
.setDescription('**Незнание правил не освобождает от ответственности**')
.addFields(
{ name: '**Входя на сервер, вы автоматически соглашаетесь со всеми правилами**', value:
'**1)** Любые оскорбления в сторону расы/пола/семьи запрещены.' + '\n' +
'**2)** Любой пиар в любом виде **запрещен.** _(В ЛС ТОЖЕ НЕЛЬЗЯ!)_' + '\n' +
'**3)** **Запрещено** вести себя неадекватно и/или непристойно.' + '\n' +
'**4)** Распространение вредоносных программ/ссылок **запрещено.**' + '\n' +
'**5)** **Запрещено** выдавать себя за администрацию.' + '\n' +
'**6)** **Запрещено** создание помех в голосовом канале/включать звуки через SoundPad (или через подобные программы).' + '\n' +
'**7)** **Запрещен** флуд/спам смайликами, текстом.' + '\n' +
'**8)** **Запрещено** упоминать администрацию без причины.' + '\n' +
'**9)** Любой бунт/призыв против администрации/правил **запрещены.**' + '\n' +
'**10)** **Запрещено** отправлять сообщения, которые имеют сексуальный и/или шокирующий материал.' + '\n' +
'**11)** Любые угрозы в сторону участника сервера **запрещены.**' + '\n' +
'**12)** Агрессия/провокация на ссору **запрещены.**' + '\n' +
'**13)** Торг/продажа чего-либо **запрещены.**' + '\n' +
'**14)** Злоупотребление матом **запрещено.**' + '\n' })
.setImage('https://i.imgur.com/AYlRRkt.png')
.setTimestamp()
.setFooter('Among Us по-русски', 'https://i.imgur.com/Tc6QKK1.jpg');
msg.channel.send(rulesembed)
msg.delete().catch();
}
else {
  msg.channel.send('**У вас нет прав на использование этой команды!**')
}
}
});


client.on('message', (msg) => {
  if(msg.guild.channels.cache.get('761622039408410644')) {
    msg.guild.channels.cache.get('765494369473003531').send(msg.content);
  }
});
