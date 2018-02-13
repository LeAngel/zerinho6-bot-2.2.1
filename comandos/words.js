const Discord = require("discord.js")
exports.run = (bot, message, args) => {
      if(!message.channel.permissionsFor(bot.user.id).has('EMBED_LINKS')) return message.channel.send("Por favor, me dê a permissão EMBED_LINKS para esse e outros comandos funcionarem.");
    let argsJunto = message.content.split(" ").slice(1).join(' ')
    let argsSeparacaoPorBarra = message.content.split(' ').slice(1).join(' ').split(' | ')
    var Jimp = require("jimp")
	if(message.content.split(' ').slice(1).join(' ').length < 1) {
		message.channel.send('Você não escreveu nada...')
	} else {
		if(message.content.split(' ').slice(1).join(' ').length > 119) {
			message.channel.send('Você ultrapassou o limite de 119 caracteres...')
		}
			if(message.guild.member(bot.user).hasPermission('ATTACH_FILES')) {
				var authorMessage = message
				message.channel.send(':clock12: | Aguarde...').then(message => {
			Jimp.read('http://imgur.com/YeuUON0.png', function (err, image) {
			if (err) message.channel.send('Ocorreu um erro ao criar a imagem...')
			Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(function (font) {
			image.print(font, 52, 330, argsJunto, 250)
			var aguardeMessage = message
			let embed = new Discord.RichEmbed().setDescription(':frame_photo: | ' + authorMessage.author).setImage('attachment://imagem.png');
image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
embed.attachFile(new Discord.Attachment(buffer, 'imagem.png'));
message.channel.send(embed).then(() => {
    aguardeMessage.delete();
});
});
			})
			})})
			} else {
				message.channel.send('Eu não tenho a permissão necessária para fazer isso...')
			}
		


}
}
