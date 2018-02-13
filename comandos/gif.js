const Discord = require("discord.js")
exports.run = (bot, message, args) => {
  if(!message.channel.permissionsFor(bot.user.id).has('EMBED_LINKS')) return message.channel.send("Por favor, me dê a permissão EMBED_LINKS para esse e outros comandos funcionarem.");
var giphy = require( 'giphy' )('a4cf068bc86a4a939ecb883414318a2c');
giphy.search({
    q: message.content.split(" ").slice(1).join("+"),
    limit: 1
}, function (err, res) {
    if(err) {
        message.reply('Busca sem resultado')
        console.log(err)
    } else if (res.data.length < 0) {
     message.reply("Você não botou a pesquisa")
    } else if(res.data.length > 0) {
      		let embed = new Discord.RichEmbed()
           .setImage(res.data[0].images.original.url)
           .setTimestamp()
          	.setAuthor(message.author.username, message.author.avatarURL)
          message.channel.send({embed})
    }
});
        }
