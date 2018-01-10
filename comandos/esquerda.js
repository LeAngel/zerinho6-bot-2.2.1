const Discord = require('discord.js');

exports.run = (bot, msg) => {
	 let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTimestamp()
    .setTitle("Esquerda")
    .setImage("https://imgur.com/rY8n49F.png")
    message.channel.send({embed});   
}