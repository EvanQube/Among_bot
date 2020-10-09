module.exports = {
	name: 'help',
	description: 'helpEmbed',
	execute(message, args) {
    if(msg.content === prefix + 'help') {
    const helpembed = new MessageEmbed()
    .setColor('BLUE')
    .setAuthor('Among Us по-русски', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.gg/C44mCXv')
    .setThumbnail('https://i.imgur.com/wSTFkRM.png')
    .setTitle('Помощь')
    .setDescription('Список доступных команд')
    .addFields(
{ name: '\u200B', value: '\u200B' },
{ name: 'Фан', value: '>rand - скидывает случайную картинку по Among Us'},
)
.setImage('https://i.imgur.com/wSTFkRM.png')
.setTimestamp()
.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
msg.channel.send(helpembed)
}
	},
};
