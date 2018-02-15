const Discord = require("discord.js");
const fs = require("fs");
const translate = require('google-translate-api');
const moment = require("moment")
const config = require("../config.json")
const bot = new Discord.Client();
const c = ["#faff3b","#faff12","#faff00","#e4ff00","#e6fa28","#ebfa4c","#f3ff7b","#f3ff7b","#f5fe9c","#f4f9c6","#ffffff"]
const f = ['Você é burro.','Aprende a Programar.','Pqp velho.','Sai daqui!','Q horror.','Lê a porra da Docs.','que burro da 0 pra ele,kkj','Não','Irineu, quem errou o codigo não fui eu']
exports.run = (bot, message, args) => {
  const code = message.content.split(' ').slice(1).join(' ')
    if(message.author.id !== "seu_id_aqui") return;
if (message.content.includes('config.token')) {
            message.channel.send('Raio protetor... Protegi meu token de ser exibido!');
        } else {
             try {
             	eval(code)
             } catch (err) {
               	const embed = new Discord.RichEmbed()
               for (var h = 0; h < 9; h++) {
                    embed.setTitle(f[h])
                    embed.setColor(c[h])
                }
                embed.setAuthor('Mensagem de erro', message.author.avatarURL)
                  embed.setDescription("**Codigo:**" + "```" + message.content + "```" + "\n\n" + "**Erro:**" + "```" + err + "```")
                  embed.setTimestamp()
                  message.channel.send({embed});
               
             }
        }

}
