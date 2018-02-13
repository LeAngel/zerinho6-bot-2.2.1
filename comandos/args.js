const Discord = require("discord.js");
exports.run = (bot, message, args) => {
    let argsSeparacaoPorBarra = message.content.split(' ').slice(1).join(' ').split(' | ')
    let argsJunto = message.content.split(" ").slice(1).join(' ')
 if (argsJunto < 1) {
 	message.reply("Você não especificou.")
 } else if (argsSeparacaoPorBarra[4] !== undefined) {
        message.channel.send("[0]: " + argsSeparacaoPorBarra[0] + "\n[1]: " + argsSeparacaoPorBarra[1] + "\n[2]: " + argsSeparacaoPorBarra[2] + "\n[3]: " + argsSeparacaoPorBarra[3] + "\n[4]: " + argsSeparacaoPorBarra[4])
    } else if (argsSeparacaoPorBarra[3] !== undefined) {
                message.channel.send("[0]: " + argsSeparacaoPorBarra[0] + "\n[1]: " + argsSeparacaoPorBarra[1] + "\n[2]: " + argsSeparacaoPorBarra[2] + "\n[3]: " + argsSeparacaoPorBarra[3])

    } else if (argsSeparacaoPorBarra[2] !== undefined) {
                       message.channel.send("[0]: " + argsSeparacaoPorBarra[0] + "\n[1]: " + argsSeparacaoPorBarra[1] + "\n[2]: " + argsSeparacaoPorBarra[2])
    } else if (argsSeparacaoPorBarra[1] !== undefined) {
                                 message.channel.send("[0]: " + argsSeparacaoPorBarra[0] + "\n[1]: " + argsSeparacaoPorBarra[1])

    } else {
    	                       message.channel.send("[0]: " + argsSeparacaoPorBarra[0])
    }


}
