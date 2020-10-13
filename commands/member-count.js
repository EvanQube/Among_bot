module.exports = client => {

  const channel = guild.channels.cache.get('765263675434074123')
  channel.setName(`Участников: ${guild.memberCount.toLocaleString()}`)

client.on('guildMemberAdd', (member) => {channel.setName(`Участников: ${guild.memberCount.toLocaleString()}`)})
client.on('guildMemberRemove', (member) => {channel.setName(`Участников: ${guild.memberCount.toLocaleString()}`)})

const guild = client.guilds.cache.get('756567959526309958')
updateMembers(guild)
}
