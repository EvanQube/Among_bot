module.exports = client => {

const updateMembers = guild => {
  const channel = guild.channels.cache.get('765263675434074123')
  channel.setName(`Участников: ${guild.memberCount.toLocaleString()}`)
}

client.on('guildMemberAdd', (member) => updateMembers(member.guild))
client.on('guildMemberRemove', (member) => updateMembers(member.guild))

const guild = client.cache.get('756567959526309958')
updateMembers(guild)
}
