const Discord = require("discord.js");
exports.run = (bot, message) => {
    if(!message.channel.permissionsFor(bot.user.id).has('EMBED_LINKS')) return message.channel.send("Por favor, me dê a permissão EMBED_LINKS para esse e outros comandos funcionarem.");
  let embed = new Discord.RichEmbed()
  .setDescription("https://github.com/zerinho6/zerinho6-bot-2.0")
  .setTimestamp()
	.setAuthor(message.author.username, message.author.avatarURL)
  message.channel.send({embed})
};
