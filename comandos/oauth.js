const Discord = require("discord.js")
exports.run = (bot, message, args) => {
    if(!message.channel.permissionsFor(bot.user.id).has('EMBED_LINKS')) return message.channel.send("Por favor, me dê a permissão EMBED_LINKS para esse e outros comandos funcionarem.");
    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ')
    if (argsJunto.length !== 0) {
        let embed = new Discord.RichEmbed()
        .setColor(message.member.highestRole.color)
        .setAuthor("Solicitado por " + message.author.username, message.author.avatarURL)
          .setTimestamp()
          .setThumbnail(`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${argsJunto}.png`)
            .setDescription(`Aperte no nome do campeão para abrir o link\n[**\n${argsJunto}**](http://gameinfo.br.leagueoflegends.com/pt/game-info/champions/${argsJunto}/)`);
            message.channel.send({embed});
        } else {
            message.channel.send('A sintaxe do comando está incorreta. Sintaxe correta: `' + parts[0] + ' Ahri`').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })
        }
}
