const Discord = require("discord.js");
exports.run = (bot, message, args) => {
try {
	let embed = new Discord.RichEmbed();
    embed.setTimestamp();
    embed.setTitle("_Versão Atual: 2.2.1_");
    embed.setDescription("**-Bot totalmente sem decrapted e github atualizado**\nVARIOS comandos foram refeitos novamente.");
    embed.addField("Novos comandos",'ze.jogar/ze.x1/ze.horario',true);
    embed.addField("Comandos deletados",'nenhum :^)',true);
    embed.addField('Comandos "concertados"','TODOS LASKDASK');
    embed.addField("Precisa de ajuda com o bot?",'Minha tag: Moru Zerinho6#0615',true);
    embed.addField("Sabia que o zerinho6 bot é totalmente open source? e você pode ajudar a melhorar o codigo dele e ate dar ideias de comandos? Agora você sabe!",'https://github.com/zerinho6/zerinho6-bot-2.0',true)
    message.channel.send(embed)
} catch (err) {
	message.channel.send(`:open_mouth: | Parece que deu um erro inesperado!\n\n${err}`);
}

}
