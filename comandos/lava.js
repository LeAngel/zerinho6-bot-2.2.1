var Jimp = require("jimp")
const Discord = require("discord.js");


exports.run = (bot, message, args) => {
	if(message.content.split(' ').slice(1).join(' ').length < 1) {
		message.channel.send('Você não escreveu nada...')
	} else {
		if(message.content.split(' ').slice(1).join(' ').length > 66) {
			message.channel.send('Você ultrapassou o limite de 66 caracteres...')
		} else {
			if(message.guild.member(bot.user).hasPermission('ATTACH_FILES')) {
				var authorMessage = message
                    let argsJunto = message.content.split(" ").slice(1).join(' ')
				message.channel.send(':clock12: | Aguarde...').then(message => {
			Jimp.read(`http://imgur.com/CWtKE01.png`, function (err, image) {
			if (err) message.channel.send('Ocorreu um erro ao criar a imagem...')
			Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
			image.print(font, 68, 41, 'O chão é '+ argsJunto, 700)
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