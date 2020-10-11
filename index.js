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

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'among'){
        client.commands.get('among').execute(message, args);
    }

    else if(command === 'rand') {
      client.commands.get('rand').execute(message, args);
    }

});

client.on('ready', async() => {
  console.log('Bot is ready !')
  client.user.setActivity('>help', { type: 'WATCHING' })
});


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
{ name: 'Фан', value: '>rand - скидывает случайную картинку по Among Us _(временно не работает)_' + "\n" + '>among - проверка работоспособности бота'},
)
.setImage('https://i.imgur.com/AYlRRkt.png')
.setTimestamp()
.setFooter('Among Us по-русски', 'https://i.imgur.com/Tc6QKK1.jpg');
msg.channel.send(helpembed)
}
});


client.on('message', msg =>{

    if(!msg.content.startsWith(prefix) || msg.author.bot) return;
    if(msg.content === prefix + 'rules') {
      if(msg.member.roles.cache.get('759381562079838288')) {
    const rulesembed = new Discord.MessageEmbed()
    .setColor('ORANGE')
.setAuthor('Among Us по-русски', 'https://i.imgur.com/Tc6QKK1.jpg', 'https://discord.gg/C44mCXv')
.setTitle('**Правила сервера**')
.setDescription('Обязательно к прочтению')
.addFields(
{ name: '\u200B', value: '\u200B' },
{ name: '\u200B', value:
'**1)** Любые оскорбления в сторону расы/пола/семьи запрещены.'
'**2)** Любой пиар в любом виде **запрещен.** _(В ЛС ТОЖЕ НЕЛЬЗЯ!)_'
'**3)** **Запрещено** вести себя неадекватно и/или непристойно.' + "\n" +
'**4)** Распространение вредоносных программ/ссылок **запрещено.**' + "\n" +
'**5)** **Запрещено** выдавать себя за администрацию.' + "\n" +
'**6)** **Запрещено** создание помех в голосовом канале/включать звуки через SoundPad (или через подобные программы).' + "\n" +
'**7)** **Запрещен** флуд/спам смайликами, текстом.' + "\n" +
'**8)** **Запрещено** упоминать администрацию без причины.' + "\n" +
'**9)** Любой бунт/призыв против администрации/правил **запрещены.**' + "\n" +
'**10)** **Запрещено** отправлять сообщения, которые имеют сексуальный и/или шокирующий материал.' + "\n" +
'**11)** Любые угрозы в сторону участника сервера **запрещены.**' + "\n" +
'**12)** Агрессия/провокация на ссору **запрещены.**' + "\n" +
'**13)** Торг/продажа чего-либо **запрещены.**' + "\n" +
'**14)** Злоупотребление матом **запрещено.**' + "\n" })
.setImage('https://i.imgur.com/AYlRRkt.png')
.setTimestamp()
.setFooter('Among Us по-русски', 'https://i.imgur.com/Tc6QKK1.jpg');
msg.channel.send(rulesembed)
}
else {
  msg.channel.send('У вас нет прав на использование этой команды!')
}
}
});
