const Discord = require('discord.js')
exports.run = (bot, message, args) => {
	let argsJunto = message.content.split(" ").slice(1).join(' ');
	if (message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')) {
	
	if (argsJunto.length === 0) {
		message.reply("Você esqueceu de por oq eu devo falar.")
	}
	message.delete();
	message.channel.send(`${argsJunto}`)
} else {
	message.channel.send('Eu preciso da permissão "Gerenciar mensagens" pra deletar mensagens para executar esse comando');

}
};
