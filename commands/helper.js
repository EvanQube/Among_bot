module.exports = {
	name: 'among',
	description: 'Among Us',
	execute(msg, args) {
		msg.channel.send(
      '# - Важная часть/комментарий!' + '\n' +
      ' ' + '\n' +
      "---'ТЕОРЕТИЧЕСКАЯ ЧАСТЬ'---" + '\n' +
      ' ' + '\n' +
      '1. Ваш никнейм и возраст #Минимум 14 лет, но бывают исключения' + '\n' +
      '2. Сколько вы находитесь у нас? #Лучше всего 3 дня онлайна!' + '\n' +
      '3. Какие сервера администрировали? #Даёт довольно большой плюс.' + '\n' +
      '4. Почему именно ВЫ должны стать хелпером?' + '\n' +
      '5. Сколько времени вы готовы уделять серверу? #Значение - в день.' + '\n' +
      '6. Согласны ли вы с правилами сервера?' + '\n' +
      '7. Умеете ли вы выдавать справедливые наказания?' + '\n' +
      '8. Боитесь ли вы чужого мнения?' + '\n' +
      '9. Разбираетесь ли вы в консольных командах администрации?' + '\n' +
      '10. Ваша адекватность #Заполнять в виде ***%(100%)' + '\n' +
      '11. Понятие конфликтных ситуаций #Заполнять в виде **/10(10/10)' + '\n' +
      ' ' + '\n' +
      "---'ПРАКТИЧЕСКАЯ ЧАСТЬ'---" + '\n' +
      ' ' + '\n' +
      '--- Заполнять в виде: №1 - Ваш ответ ---' + '\n' +
      ' ' + '\n' +
      'Ситуация №1.' + '\n' +
      ' ' + '\n' +
      'Юный любитель игры Among us заходит в голосовой канал, и начинает разговаривать с шипящим микрофоном. Ваши действия?' + '\n' +
      ' ' + '\n' +
      'Ситуация №2.' + '\n' +
      ' ' + '\n' +
      'В общем чате, один из участников сервера решил прорекламировать свой канал. Он кинул эту ссылку в общий чат. Ваши действия с нарушителем?' + '\n' +
      ' ' + '\n' +
      'Ситуация №3.' + '\n' +
      ' ' + '\n' +
      'Игра в самом разгаре. Неожиданно, один из игроков по игровой ситуации начинает выкрикивать нецензурные слова. Что вы сделаете с любителем нецензурных словечек?'
      ' ' + '\n' +
      "-------'ОСОБАЯ ЧАСТЬ'-------" + '\n' +
      ' ' + '\n' +
      'ВНИМАНИЕ!' + '\n' +
      ' ' + '\n' +
      '1. Если вам отказали в заявке, то вы не сможете написать её заного в течении 6 часов.' + '\n' +
      ' ' + '\n' +
      '2. Если будет обнаружен плагиат или похожая заявка, то она будет ОТКЛОНЕНА, и вы не сможете стать модератором на протяжении 1 недели.'

    );
    msg.delete().catch();
	},
};