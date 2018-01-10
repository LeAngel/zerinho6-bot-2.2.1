const Discord = require("discord.js")
exports.run = (bot, message, args) => {
	if (args[0] && args[0].toLowerCase() == 'server' && message.guild) {
		let embed = new Discord.RichEmbed()
		.setImage(message.guild.iconURL)
		.setTimestamp()
		.setTitle("Aqui esta o avatar do servidor.")
		.setURL(message.guild.iconURL)
		message.channel.send({embed})
	}
	if (args[0] && args[0].toLowerCase() == 'me' && message.guild) {
		let embed = new Discord.RichEmbed()
		.setImage(message.author.avatarURL)
		.setTimestamp()
		.setTitle("Aqui esta o seu avatar.")
		.setURL(message.author.avatarURL)
		message.channel.send({embed})
	}
	if (message.mentions.users.first()) {
		let embed = new Discord.RichEmbed()
		.setImage(message.mentions.users.first().avatarURL)
		.setTimestamp()
		.setTitle("Aqui esta o avatar de " + message.mentions.users.first().username + ".")
		.setURL(message.mentions.users.first().avatarURL)
		message.channel.send({embed})
	} else {
		let embed = new Discord.RichEmbed()
		.setImage(message.author.avatarURL)
		.setTimestamp()
		.setTitle("Aqui esta o seu avatar.")
		.setURL(message.author.avatarURL)
		message.channel.send({embed})
	}
}