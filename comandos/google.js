const Discord = require("discord.js");
var moment = require('moment');
moment.locale('pt-BR');
const fs = require("fs")
let comandos = JSON.parse(fs.readFileSync('./comandos.json', 'utf8'))
let config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))
exports.run = (bot, message, args) => {
    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ');
    if(argsJunto < 1) {
    const HelpEmbed = new Discord.RichEmbed()
    HelpEmbed.setAuthor('Solicitado por ' + message.author.username, message.author.avatarURL);
      HelpEmbed.setThumbnail('http://visionarymarketing.com/images/icons/2.0-large.gif')
    let database = JSON.parse(fs.readFileSync('./database/serversconfig.json', 'utf8'))
    if (message.channel.type !== 'dm') {
        if(database[message.guild.id]) {
            if(database[message.guild.id].prefix) {
                if(database[message.guild.id].prefix !== "none") {
                    var Prefixes = '`' + config.prefixes.join('`, `') + '`, `' + database[message.guild.id].prefix + '`'
                } else {
                    var Prefixes = '`' + config.prefixes.join('`, `') + '`'
                }
            } else {
                var Prefixes = '`' + config.prefixes.join('`, `') + '`'
            }
        } else {
            var Prefixes = '`' + config.prefixes.join('`, `') + '`'
        }
    } else {
        var Prefixes = '`' + config.prefixes.join('`, `') + '`'
    }
    HelpEmbed.addField('Comandos', '`' + Object.keys(comandos).join('` `') + '`\n\n**Prefixes:** ' + Prefixes + '\n\nPara ver mais sobre um comando, execute `ze.help (comando)`.\n**Exemplo:** `ze.help poll`')
    HelpEmbed.setFooter('Zerinho Bot criado por Zerinho6 e Smix.', ' https://i.imgur.com/4owShZN.png');
    if(message.channel.type === 'dm') {
        message.channel.send(HelpEmbed)
    } else {
        if(message.member.highestRole.color !== undefined) {
            HelpEmbed.setColor(message.member.highestRole.color)
            if(message.guild.member(bot.user).hasPermission('EMBED_LINKS')) {
                message.channel.send(HelpEmbed)
            } else {
                message.author.send(HelpEmbed);
                message.channel.send(':warning: | Eu não tenho a permissão `EMBED_LINKS` neste servidor. O resultado foi enviado por privado...');
            }
        }
    }
} else {
    if(Object.keys(comandos).some(a => a === args[0])) {
        const HelpEmbed = new Discord.RichEmbed()
        HelpEmbed.setAuthor('Solicitado por ' + message.author.username, message.author.avatarURL);
        HelpEmbed.setTitle('ze.' + Object.keys(comandos)[Object.keys(comandos).findIndex(a => a === args[0])])
        HelpEmbed.setDescription(comandos[args[0]].description + '\n\n**Uso: **' + comandos[args[0]].usage)
        if(message.channel.type === 'dm') {
        message.channel.send(HelpEmbed)
    } else {
        if(message.member.highestRole.color !== undefined) {
            HelpEmbed.setColor(message.member.highestRole.color)
            if(message.guild.member(bot.user).hasPermission('EMBED_LINKS')) {
                message.channel.send(HelpEmbed)
            } else {
                message.channel.send(':warning: | Eu não tenho a permissão `EMBED_LINKS` neste servidor. O resultado foi enviado por privado...');
            }
        }
    }
    } else {
        message.channel.send('Você não escreveu um comando correto...')
    }
}}
