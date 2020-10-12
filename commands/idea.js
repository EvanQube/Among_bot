module.exports = {
	name: 'among',
	description: 'Among Us',
	execute(client, msg, args) {
		client.users.cache.get('352389928543584256').send(args);
	},
};
