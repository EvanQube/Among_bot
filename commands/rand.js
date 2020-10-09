module.exports = {
	name: 'rand',
	description: 'randomImage',
	execute(message, args) {
		if(msg.content === prefix + 'rand') {
	  number = 3;
	  let imageNumber = Math.floor(Math.random() *(number - 1 + 1)) + 1;
	  msg.channel.send({files: ["./images/" + imageNumber + ".png"]})
	}
	},
};
