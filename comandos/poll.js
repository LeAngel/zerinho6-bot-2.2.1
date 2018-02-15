const Discord = require("discord.js");
var moment = require('moment');
moment.locale('pt-BR');
exports.run = (bot, message, args) => {
	      if(!message.channel.permissionsFor(bot.user.id).has('EMBED_LINKS')) return message.channel.send("Por favor, me dê a permissão EMBED_LINKS para esse e outros comandos funcionarem.");
    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ')
    const pollcommand = new Discord.RichEmbed();
    if(args.length === 0) {
    	message.channel.send('Você não deu argumentos...').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })
    } else {
        pollcommand.setAuthor('Votação por ' + message.author.username, message.author.avatarURL);
        if (message.member.highestRole.color !== undefined) {
            pollcommand.setColor(message.member.highestRole.color);
        }
        pollcommand.setDescription(`${argsJunto}`);
        pollcommand.setTimestamp();
        if (parts.length > 1) {
                message.channel.sendEmbed(pollcommand).then(message => {
                    message.react('👍').then(message.react('👎'))
                })
            
            }}
}
