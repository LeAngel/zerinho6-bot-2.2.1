const Discord = require("discord.js")
exports.run = (bot, message, args) => {
  if(message.channel.permissionsFor(bot.user.id).has('EMBED_LINKS')) {
let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setTitle("Creditos")
  .setTimestamp()
  .setDescription("``Criação do bot\n\nSMix, Zerinho6\n\nIdeias de Comandos:\n\nCandy,Glot,Thiago,Kled,Rafael,Hinako,Smix,conflux,Amorelli,Skelun,Golix.\n\nAjuda com o codigo:\nCandy,Smix,<Brazil Coding>, BR Programers\n\nAgradecimentos:\nLeague BR,Teemo.gg,Spotlight Brasil,Akatsuki,**MIKI**,meus amigos e você!``")
  .setColor(message.member.highestRole.color)
  .setThumbnail("https://media.giphy.com/media/osjgQPWRx3cac/giphy.gif")
        message.channel.send({embed});
      } else {
        message.channel.send("Por favor, me dê a permissão EMBED_LINKS para esse e outros comandos funcionarem.")
      }
}
