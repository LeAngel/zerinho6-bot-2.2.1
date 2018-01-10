const Discord = require("discord.js");
const fs = require("fs");
exports.run = (bot, message, args) => {
	let database = JSON.parse(fs.readFileSync('./database/serversconfig.json', 'utf8'));
	let argsJunto = message.content.split(' ').slice(1).join(' ')
	if(message.channel.type === 'dm') {
		message.channel.send('Você só pode executar este comando num servidor...')
	} else {
	if(message.member.hasPermission('MANAGE_MESSAGES')) {
	if(args.length < 1) {
		message.channel.send('Você não deu argumentos...Veja o uso correto usando o comando de ajuda -_-.')
	} else {
		let argsSeparacaoPorBarra = message.content.split(' ').slice(1).join(' ').split(' | ')
		if(argsSeparacaoPorBarra.length <= 1) {
			message.channel.send('Você não deu argumentos. Veja o uso correto usando o comando de ajuda...')
		} else {
			if(argsSeparacaoPorBarra > 2) {
				message.channel.send('Você não deu argumentos...Veja o uso correto usando o comando de ajuda.')
			} else {
				if(!database[message.guild.id]) database[message.guild.id] = {
						comandos: {}
				}
				database[message.guild.id].comandos[argsSeparacaoPorBarra[0]] = argsSeparacaoPorBarra[1]
				setTimeout (() => {fs.writeFile('./database/serversconfig.json', JSON.stringify(database), (err) => {
    			if (err) console.error(err)
  				})}, 1000)
				message.channel.send('Vou responder `' + argsSeparacaoPorBarra[1] + '` quando digitarem `' + argsSeparacaoPorBarra[0] + '`...')

			}
		}
	}
} else {
	message.channel.send('Você não tem permissão para executar esse comando...')
}
}}