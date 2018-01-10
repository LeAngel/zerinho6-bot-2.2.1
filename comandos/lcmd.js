const Discord = require("discord.js");
var moment = require('moment');
moment.locale('pt-BR');
const fs = require("fs")
exports.run = (bot, message, args) => {
    let database = JSON.parse(fs.readFileSync('./database/serversconfig.json', 'utf8'))
    if(message.channel.type === 'dm') {
        message.channel.send('Você só pode executar este comando num servidor...')
    } else {
    if(!database[message.guild.id]) {
        message.channel.send(':green_book: | Não há nenhum comando personalizado neste servidor...')
    } else if (!database[message.guild.id].comandos) {
        message.channel.send(':green_book: | Não há nenhum comando personalizado neste servidor...')
    } else if (Object.keys(database[message.guild.id].comandos).length < 1) {
        message.channel.send(':green_book: | Não há nenhum comando personalizado neste servidor...')
    } else {
    const HelpEmbed = new Discord.RichEmbed()
    HelpEmbed.setAuthor('Solicitado por ' + message.author.username, message.author.avatarURL);
    HelpEmbed.addField('Comandos Personalizados:', '`' + Object.keys(database[message.guild.id].comandos).join('` `') + '`')
    HelpEmbed.setFooter('Zerinho6 Bot criado por SMix e Zerinho6.', 'https://cdn.discordapp.com/avatars/332968532096843776/eff4c52d93aacd394d15d98a88485a4a.png?size=2048');
    if(message.channel.type === 'dm') {
        message.channel.sendEmbed(HelpEmbed)
    } else {
        if(message.member.highestRole.color !== undefined) {
            HelpEmbed.setColor(message.member.highestRole.color)
            if(message.guild.member(bot.user).hasPermission('EMBED_LINKS')) {
                message.channel.sendEmbed(HelpEmbed)
            } else {
                message.author.sendEmbed(HelpEmbed);
                message.channel.send(':warning: | Eu não tenho a permissão `EMBED_LINKS` neste servidor. O resultado foi enviado por privado...');
            }
        }
    }
}}}