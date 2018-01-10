const Discord = requrie('discord.js');
exports.run = (bot, msg) => {
	 let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTimestamp()
    .setTitle("direita")
    .setImage("https://imgur.com/nzyzZHq.png")
    message.channel.send({embed});         
};