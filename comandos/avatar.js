const Discord = require("discord.js")
exports.run = (bot, message, args) => {
  if(message.channel.permissionsFor(bot.user.id).has('ATTACH_FILES')) {
    if(message.channel.permissionsFor(bot.user.id).has('EMBED_LINKS')) {
	if (args[0] === undefined) {
		let embed = new Discord.RichEmbed()
		.setImage(message.author.avatarURL)
		.setTimestamp()
		.setTitle("Aqui esta o seu avatar.")
		.setURL(message.author.avatarURL)
		message.channel.send({embed})
	} else if (args[0] && args[0].toLowerCase() == 'server' && message.guild) {
		if (message.guild.iconURl === undefined) return;
		let embed = new Discord.RichEmbed()
		.setImage(message.guild.iconURL)
		.setTimestamp()
		.setTitle("Aqui esta o avatar do servidor.")
		.setURL(message.guild.iconURL)
		message.channel.send({embed})
	} else if (args[0] && args[0].toLowerCase() == 'me' && message.guild) {
		let embed = new Discord.RichEmbed()
		.setImage(message.author.avatarURL)
		.setTimestamp()
		.setTitle("Aqui esta o seu avatar.")
		.setURL(message.author.avatarURL)
		message.channel.send({embed})
	} else if (message.mentions.users.first() !== undefined) {
		let embed = new Discord.RichEmbed()
		.setImage(message.mentions.users.first().avatarURL)
		.setTimestamp()
		.setTitle("Aqui esta o avatar de " + message.mentions.users.first().username + ".")
		.setURL(message.mentions.users.first().avatarURL)
		message.channel.send({embed})
	}
}} 
}
