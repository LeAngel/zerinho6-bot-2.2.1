const Discord = require("discord.js")
const embed = new Discord.RichEmbed()
exports.run = (bot, message, args) => {
	    if(!message.channel.permissionsFor(bot.user.id).has('EMBED_LINKS')) return message.channel.send("Por favor, me dê a permissão EMBED_LINKS para esse e outros comandos funcionarem.");
    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ')
    	   if (argsJunto.length !== 0) {
            message.channel.bulkDelete(1);
            embed.setAuthor(message.author.username, message.author.avatarURL)
            embed.setTimestamp()
            embed.setDescription('' + `${argsJunto}`);
            message.channel.send({ embed });
        } else {
            message.channel.send('A sintaxe do comando está incorreta. Sintaxe correta: `' + parts[0] + ' Sou legal!`')
        }
        }
