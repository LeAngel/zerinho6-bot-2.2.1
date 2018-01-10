const Discord = require("discord.js");
var moment = require('moment');
moment.locale('pt-BR');
exports.run = (bot, message, args) => {
    if (message.author.id === "242039675970256898") return message.reply("não funciona com viado.")
    if (message.author.id === "281561868844269569") return message.reply("não funciona com vadia")
    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ')
    	   if (argsJunto.length !== 0) {
            message.channel.bulkDelete(1);
            message.channel.send(`${argsJunto}`);
        } else {
            message.channel.send('A sintaxe do comando está incorreta. Sintaxe correta: `' + parts[0] + ' Sou legal!`').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })
        }
}