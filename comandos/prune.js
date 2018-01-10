const Discord = require("discord.js");
var moment = require('moment');
moment.locale('pt-BR');
exports.run = (bot, message, args) => {
    let parts = message.content.split(' ');
    let argsJunto = parts[1]
    let toDeleteCount = parseInt(parts[1]);
        if (message.member.hasPermission('MANAGE_MESSAGES')) {
            if (message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')) {
                if (parts.length > 1 && parts.length < 3) {
                    if (isNaN(toDeleteCount) === false) {
                        if (toDeleteCount < 100) {
                            message.channel.bulkDelete(toDeleteCount + 1, true)
                            message.channel.send('' + toDeleteCount + 'mensagens foram deletadas neste canal...').then(message => {
                                setTimeout(() => {message.delete()}, 5000)
                            })

                        } else {
                            message.channel.send('Você só pode apagar até 100 mensagens por vez sendo que o codigo conta (o numero dado) + 1').then(message => {
                                setTimeout(() => {message.delete()}, 5000)
                            })
                        }
                    } else {
                        message.channel.send('Parece que os argumentos dados não são números... Sintaxe correta: `' + parts[0] + ' 10`').then(message => {
                                setTimeout(() => {message.delete()}, 5000)
                            })
                    }
                } else {
                    message.channel.send('Informe o número de mensagens a deletar... Sintaxe correta: `' + parts[0] + ' 10`').then(message => {
                                setTimeout(() => {message.delete()}, 5000)
                            })
                }
            } else {
                message.channel.send('Eu não tenho permissão necessária para fazer isso...').then(message => {
                                setTimeout(() => {message.delete()}, 5000)
                            })
            }
        } else {
            message.channel.send('Você não tem a permissão necessária para fazer isso...').then(message => {
                                setTimeout(() => {message.delete()}, 5000)
                            })
        }
}