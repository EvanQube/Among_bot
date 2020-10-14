module.exports = {
	name: 'idea',
	description: 'Idea',
	execute(msg, args, client) {
		client.users.cache.get('352389928543584256').send(args);
		msg.delete().catch()}
  };
