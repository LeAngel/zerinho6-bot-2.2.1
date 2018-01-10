const Discord = require("discord.js")
const Sim = a => a.content == 'Sim'
const Não = a => a.content == 'Não'
exports.run = (bot, message, args) => {
    if (message.author.id !== "SEU ID AQUI") return;
            let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTimestamp()
        .setTitle("Desligar Bot")
        .setDescription("_Tem certeza que deseja desligar o bot?_\n" + "\n``Sim\n\nNão``")
        message.channel.send({embed});
            message.channel.awaitMessages(Sim, {max:1, time:10000, errors:['time']}).then(collected => message.channel.send("``Sim:Desligando``"(eval(process.exit()))))
            message.channel.awaitMessages(Não, {max:1, time:10000, errors:['time']}).then(collected => message.channel.send("``Não:Cancelando enceramento``"))
}
