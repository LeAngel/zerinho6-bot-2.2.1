const Discord = require("discord.js")
exports.run = (bot, message, args) => {
    {
            var code = message.content.split(' ').slice(1).join(' ')
            try {
                message.channel.send('enviado!')
            } catch (err) {
                message.edit(`enviado`);
            }}
            console.log(message.content)
    
        }