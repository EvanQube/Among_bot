module.exports = {
  name: 'help',
  description: 'HelpEmbed',
  execute(msg, Discord) {
    const halloween2020Embed = new Discord.MessageEmbed()
      .setColor('ORANGE')
      .setAuthor('Among Us по-русски', 'https://i.imgur.com/Tc6QKK1.jpg', 'https://discord.gg/C44mCXv')
      .setTitle('Halloween 2020')
      .addFields({
        name: '\u200B',
        value:
        '\t **Приветствую, дорогие участники этого сервера!!** \n' +
'До 1 ноября в канале <#761869526153166899> с рандомным шансом будут появляться разные существа от бота <@755580145078632508>. \n' +
'Для того, чтобы их поймать, нужно ввести команду ```h!trick``` или ```h!treat```. После этого вам будут начислены очки и добавятся предмет в инвентарь. \n' +
'По окончанию ивента будут определено 5 призовых мест, которым дадут роли за соотвествующие места'
      }, )
      .setImage('https://freedesignfile.com/upload/2014/10/Vector-set-of-halloween-pumpkin-design-material-05.jpg')
      .setTimestamp()
      .setFooter('Among Us по-русски', 'https://i.imgur.com/Tc6QKK1.jpg');
    msg.channel.send(halloween2020Embed)
    msg.delete().catch();
  },
};
