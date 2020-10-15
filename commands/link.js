module.exports = {
  name: 'link',
  description: 'Приглашение на сервер',
  execute(msg) {
    msg.channel.send('**Приглашение на сервер:** https://discord.gg/C44mCXv')
      msg.delete().catch();
    }
};
