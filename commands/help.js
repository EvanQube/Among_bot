module.exports = {
	name: 'help',
	description: 'helpEmbed',
	execute(message, args) {
    if(msg.content === prefix + 'help') {
    const helpembed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor('Among Us по-русски', 'https://imgur.com/Tc6QKK1', 'https://discord.gg/C44mCXv')
    .setTitle('Помощь')
    .setDescription('Список доступных команд')
    .addFields(
{ name: '\u200B', value: '\u200B' },
{ name: 'Фан', value: '>rand - скидывает случайную картинку по Among Us'},
{ name: '\u200B', value: '>among - проверка работоспособности бота'},
)
.setImage('https://imgur.com/r75HyZj')
.setTimestamp()
.setFooter('Among Us по-русски', 'https://imgur.com/Tc6QKK1');
msg.channel.send(helpembed)
}
	},
};
