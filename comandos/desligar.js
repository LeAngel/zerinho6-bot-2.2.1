const Discord = require("discord.js")
const Sim = a => a.content == 'Sim'
const Não = a => a.content == 'Não'
exports.run = (bot, message, args) => {
  if (message.author.id !== "SEU_ID_AQUI") return;
  if(message.channel.permissionsFor(bot.user.id).has('EMBED_LINKS')) {
            let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTimestamp()
        .setTitle("Reiniciar Bot")
        .setDescription("_Tem certeza que deseja Reiniciar o bot?_\n" + "\n``Sim\n\nNão``")
        message.channel.send({embed});
        message.channel.awaitMessages(Sim, {max:1, time:10000, errors:['time']}).then(collected => message.channel.send("``Sim:Desligando``")).then(setTimeout(() => {eval(process.exit())}, 2000))
            message.channel.awaitMessages(Não, {max:1, time:10000, errors:['time']}).then(collected => message.channel.send("``Não:Cancelando enceramento``"))
          } else  {
            message.channel.send("Por favor, me dê a permissão EMBED_LINKS para esse e outros comandos funcionarem.")
          }
}

