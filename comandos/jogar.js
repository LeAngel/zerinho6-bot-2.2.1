const Discord = require("discord.js")
exports.run = (bot, message, args) => {
    if(!message.channel.permissionsFor(bot.user.id).has('EMBED_LINKS')) return message.channel.send("Por favor, me dê a permissão EMBED_LINKS para esse e outros comandos funcionarem.");

    
let argsJunto = message.content.split(" ").slice(1).join(' ')
let argsSeparacaoPorBarra = message.content.split(' ').slice(1).join(' ').split(' | ')
const jogos = {
    "league of legends": "https://i.imgur.com/BqTQlbh.gif",
    "lol" : "https://i.imgur.com/BqTQlbh.gif",
    "league" : "https://i.imgur.com/BqTQlbh.gif",
    "lozin" : "https://i.imgur.com/BqTQlbh.gif",
    "dota 2" : "https://i.imgur.com/NeHkV6G.gif",
    "Fortnite": "https://i.imgur.com/sjxGI9V.gif",
    "minecraft" : "http://emstechlab.com/minecraftedu/images/minecraft-logo-transparent-.gif",
    "brawlhalla" : "https://i.imgur.com/2YhERUx.png",
    "stepmania" : "https://i.imgur.com/3nzaqXV.png",
    "call of duty 4 modern warfare" : "https://i.imgur.com/rUKE0fR.png",
    "cod4" : "https://i.imgur.com/rUKE0fR.png",
    "mw4" : "https://i.imgur.com/rUKE0fR.png",
    "call of duty 4" : "https://i.imgur.com/rUKE0fR.png",
    "heartstone" : "https://i.imgur.com/ZoDAId4.gif",
    "hearthstone" : "https://i.imgur.com/ZoDAId4.gif",
    "hs" : "https://i.imgur.com/ZoDAId4.gif",
    "cs: go" : "https://i.imgur.com/byO9ejE.png",
    "cs go" : "https://i.imgur.com/byO9ejE.png",
    "csgo" : "https://i.imgur.com/byO9ejE.png",
    "cs:go": "https://i.imgur.com/byO9ejE.png" ,
    "warframe" : "https://i.imgur.com/zjzPnmG.png",
    "heroes of the storm" : "https://i.imgur.com/2w9kROf.png",
    "HOTS" : "https://i.imgur.com/2w9kROf.png",
    "heroes" : "https://i.imgur.com/2w9kROf.png",
    "starcraft II" : "https://i.imgur.com/WA5nBMD.png",
    "starcraft 2" : "https://i.imgur.com/WA5nBMD.png",
    "SC" : "https://i.imgur.com/WA5nBMD.png",
    "battlerite" : "https://i.imgur.com/zH1rZph.png",
    "vrchat" : "https://i.imgur.com/gUeHmdi.png",
    "don't starve together" : "https://i.imgur.com/gNgZEzp.png",
    "dont starve together" : "https://i.imgur.com/gNgZEzp.png",
    "dst" : "https://i.imgur.com/gNgZEzp.png",
    "world of warcraft" : "https://i.imgur.com/UMpQn16.png",
    "wow" : "https://i.imgur.com/UMpQn16.png",
    "paladins" : "https://i.imgur.com/u7TyPmb.png",
    "overwatch" : "https://i.imgur.com/0QrBksq.png",
    "ow" : "https://i.imgur.com/0QrBksq.png",
    "creativerse" : "https://i.imgur.com/iCXxCtQ.png",
    "business tour" : "https://i.imgur.com/rOy36pm.jpg",
    "payday 2" : "https://i.imgur.com/ah2m9GI.png",
    "payday" : "https://i.imgur.com/ah2m9GI.png",
 };

 var embed = new Discord.RichEmbed()
 
if (argsJunto < 1 ) {
	message.reply("Você não botou nada apos o comando.")
} else if (argsSeparacaoPorBarra.length < 3) {
 message.reply("Você tem que fazer a separação por barras, exemplo: ze.jogar 1 | League of Legends | 3 minutos\n\nVocê também pode fazer: ze.jogar 1 | League of Legends | 3 minutos | Sou Mid laner preciso de um jungle")
} else if (isNaN(argsSeparacaoPorBarra[0]) === true){
 message.reply("A quantidade de jogadores deve ser em numero.")
} else if (argsSeparacaoPorBarra.length >= 3) {

embed.setAuthor(message.author.username, message.author.avatarURL)
embed.setTimestamp()
if(jogos[argsSeparacaoPorBarra[1].toLowerCase()]) {
    embed.setThumbnail(jogos[argsSeparacaoPorBarra[1].toLowerCase()]);
}
if (argsSeparacaoPorBarra.length  >= 4) {
embed.addField(":page_with_curl: | Informação adicional", argsSeparacaoPorBarra[3],true);
}
embed.addField(":two_men_holding_hands: | Esta esperando",`${argsSeparacaoPorBarra[0]} pessoa(s)`)
embed.addField(":video_game: | Para jogar",argsSeparacaoPorBarra[1],true)
embed.addField(":clock1: | Tempo de Espera",argsSeparacaoPorBarra[2])
embed.setDescription(`Quer jogar com ${message.author.username}? Marque ele em algum canal ou tente falar com ele pelo PV.`)
if(message.member.highestRole.color !== undefined) {
    embed.setColor(message.member.highestRole.color)
}
message.channel.send(embed)
                                }
}
