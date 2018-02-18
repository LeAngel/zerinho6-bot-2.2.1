const Discord = require("discord.js");
exports.run = (bot,message,args) => {
if(!message.channel.permissionsFor(bot.user.id).has('EMBED_LINKS')) return message.channel.send("Por favor, me dê a permissão EMBED_LINKS para esse e outros comandos funcionarem. | I need EMBED_LINKS permission to use this command");
var segundos = Math.floor(process.uptime() % 60);
var minutos = Math.floor(process.uptime() / 60 % 60);
var hora = Math.floor(process.uptime() / 3600 % 24);      
var embed = new Discord.RichEmbed();
var startTime = Date.now(); 
embed.setTitle("Espere...")
message.channel.send(embed).then(message => {
    setTimeout(() => {
 var endTime = Date.now();
embed.setAuthor(message.author.username, message.author.avatarURL);
embed.setTimestamp();
if (message.member.highestRole.color !== undefined) {
    embed.setColor(message.member.highestRole.color);
}
embed.setTitle("<:botTag:230105988211015680> | Informations about me | Informações sobre min")
embed.addField("<a:updating:403035325242540032> | Tempo sem reiniciar / Time Without shutdown","```"+ hora + ":" + minutos + ":" + segundos + "```",true);
embed.addField(":wrench: | Versão do Node.js / Node.js Version","```" + process.version + "```",true);
embed.addBlankField()
embed.addField("<:discord:314003252830011395> | Versão do discord.js / discord.js version","```" + require('discord.js').version + "```",true)
embed.addField("<a:cursor:404001393360502805> | Servidores / Guilds","```" + bot.guilds.size + "```")
embed.addBlankField();
embed.addField("<a:loading:393852367751086090> | Ping","```" + Math.round(endTime - startTime) + "ms```",true)
embed.addField(":gear: | RAM","```" + Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + "MB```",true)
message.edit(embed)
    }, 1)
})
}
