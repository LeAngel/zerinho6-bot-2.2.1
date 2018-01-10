var Jimp = require("jimp")
const Discord = require("discord.js");


exports.run = (bot, message, args) => {
	if(message.content.split(' ').slice(1).join(' ').length < 1) {
		message.channel.send('Você não escreveu nada...')
	} else {
		if(message.content.split(' ').slice(1).join(' ').length > 119) {
			message.channel.send('Você ultrapassou o limite de 119 caracteres...')
		} else {
			if(message.guild.member(bot.user).hasPermission('ATTACH_FILES')) {
				var authorMessage = message
				message.channel.send(':clock12: | Aguarde...').then(message => {
			Jimp.read(`http://imgur.com/YeuUON0.png`, function (err, image) {
			if (err) message.channel.send('Ocorreu um erro ao criar a imagem...')
			Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(function (font) {
			image.print(font, 52, 330, authorMessage.content.split(' ').slice(1).join(' '), 250)
			var aguardeMessage = message
			image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
			message.channel.sendFile(buffer, 'imagem.png', ':frame_photo: | <@' + authorMessage.author.id + '>').then(message => {
				aguardeMessage.delete()
			})
			})
			})
			})})
			} else {
				message.channel.send('Eu não tenho a permissão necessária para fazer isso...')
			}
		}

}
}