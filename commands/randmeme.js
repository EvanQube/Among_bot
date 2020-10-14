module.exports = {
	name: 'randmeme',
	description: 'Random meme',
	execute(msg, args) {
		number = 10;
    imageNumber = Math.floor(Math.random() * (number - 1)) + 1;
    msg.channel.send({files: ['./images/' + imageNumber + '.jpg']})
    msg.delete().catch();
	},
};
