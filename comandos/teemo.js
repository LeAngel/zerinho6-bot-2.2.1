const Discord = require("discord.js")
exports.run = (bot, message, args) => {
    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ')
    if (argsJunto.length !== 0) {
        let embed = new Discord.RichEmbed()
        .setTitle("O Teemo.GG precisa urgentemente da sua ajuda pois corre o sério risco de acabar. Clique aqui para saber mais.")
        .setColor(message.member.highestRole.color)
        .setAuthor(message.author.username, message.author.avatarURL)
          .setTimestamp()
          .setURL("https://www.patreon.com/Yordles")
          .addField("Aperte no nome do Invocador para abrir o link.", '.')
          .setThumbnail("https://cdn.discordapp.com/emojis/298229401399853056.png")
            .setDescription(`[**\n${argsJunto}**](https://teemo.gg/player/resume/br/${argsJunto}/)`);
            message.channel.send({embed});
        } else {
            message.channel.send('A sintaxe do comando está incorreta. Sintaxe correta: `' + parts[0] + ' zerinho6`').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })
        }
}
