const Discord = require("discord.js");
var moment = require('moment');
moment.locale('pt-BR');
exports.run = (bot, message, args) => {
    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ')
    if(message.channel.type === 'dm') {
			message.channel.send('Você deve executar este comando apenas em servidores.')
		} else if (message.member.id === message.guild.ownerID) {
        	if(message.guild.member(bot.user).highestRole.position > message.guild.member(message.mentions.users.first()).highestRole.position) {
							message.guild.member(message.mentions.users.first()).kick(message.guild.member())
							message.channel.send('O usuário **' + message.mentions.users.first().username + '** foi expulso do servidor...')
							} else if (message.guild.member(bot.user).highestRole.position < message.guild.member(message.mentions.users.first()).highestRole.position) {
							message.channel.send('O usuário mencionado tem cargo maior que eu...')
						} else if (message.guild.member(bot.user).highestRole.position === message.guild.member(message.mentions.users.first()).highestRole.position) {
							message.channel.send('A pessoa que você está tentando expulsar tem permissões idênticas às minhas...')
						}} else if(message.member.hasPermission('KICK_MEMBERS')) {
			if(message.guild.member(bot.user).hasPermission('KICK_MEMBERS')) {
				if(message.mentions.users.first() !== undefined) {
					if(message.member.highestRole.position > message.guild.member(message.mentions.users.first()).highestRole.position) {
						if(message.guild.member(bot.user).highestRole.position > message.guild.member(message.mentions.users.first()).highestRole.position) {
							message.guild.member(message.mentions.users.first()).kick(message.guild.member())
							message.channel.send('O usuário **' + message.mentions.users.first().username + '** foi expulso do servidor...')
						} else if (message.guild.member(bot.user).highestRole.position < message.guild.member(message.mentions.users.first()).highestRole.position) {
							message.channel.send('O usuário mencionado tem cargo maior que eu...')
						} else if (message.guild.member(bot.user).highestRole.position === message.guild.member(message.mentions.users.first()).highestRole.position) {
							message.channel.send('A pessoa que você está tentando expulsar tem permissões idênticas às minhas...')
						}
					} else if (message.member.highestRole.position < message.guild.member(message.mentions.users.first()).highestRole.position) {
						message.channel.send('O usuário mencionado tem cargo maior que você...')
					} else if (message.member.highestRole.position === message.guild.member(message.mentions.users.first()).highestRole.position) {
						message.channel.send('A pessoa que você está tentando expulsar tem permissões idênticas às suas...')
					}
				} else {
					message.channel.send('O usuário não reconheceu a pessoa mencionada, ou você não mencionou ninguém...')
				}
			} else {
				message.channel.send('Eu não tenho a permissão necessária para fazer isso...')
			}
		} else {
			message.channel.send('Você não tem a permissão necessária para fazer isso...')
		}
}