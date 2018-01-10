exports.run = (bot, message, args) => {
		if (message.channel.permissionsFor(bot.user.id).has('MANAGE_MESSAGES')) {
			return message.channel.send('Eu preciso de permissão pra deletar mensagens para executar esse comando');
		}

		if (args.length === 0) {
			return message.channel.send('Você esqueceu de botar oq eu devo falar');
		}

		 message.delete();
		 message.channel.send(args.join(' '));
};