module.exports = {
	name: 'randmeme',
	description: 'Random meme',
	execute(message, args) {
		number = 11;
    imageNumber = Math.floor(Math.random() * (number - 1)) + 1;
    message.channel.send({files: ['./images/' + imageNumber + '.png']})
	},
};
