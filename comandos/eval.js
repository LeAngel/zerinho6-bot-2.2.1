const Discord = require("discord.js");
const chalk = require('chalk');
const log = console.log;
const fs = require("fs");
var translate = require('google-translate-api');
var moment = require("moment")
const config = require("../config.json")
const warning = chalk.keyword('red');
var randomNumber = Math.floor(Math.random() * 10);
exports.run = (bot, message, args) => {
    if(message.author.id !== "134292889177030657") return;
    if (message.content.includes('config.token')) {
            message.channel.send('Raio protetor... Protegi meu token de ser exibido!');
        } else {
            var code = message.content.split(' ').slice(1).join(' ')
            try {
                message.channel.send(eval(code));
            } catch (err) {
                if (Math.floor(Math.random() * 10) === 10) {
                    let embed = new Discord.RichEmbed()
                    .setTitle("**vc é burro**")
                    .setColor(0xFFFF00)
                .setAuthor('Mensagem de erro', message.author.avatarURL)
                  .setDescription("**Codigo:**" + "```" + message.content + "```" + "\n\n" + "**Erro:**" + "```" + err + "```")
                  message.channel.send({embed});
                } else if (Math.floor(Math.random() * 10) === 9) {
                    let embed = new Discord.RichEmbed()
                    .setTitle("**aprende a programar**")
                    .setColor(0xFFFF00)
                .setAuthor('Mensagem de erro', message.author.avatarURL)
                  .setDescription("**Codigo:**" + "```" + message.content + "```" + "\n\n" + "**Erro:**" + "```" + err + "```")
                  message.channel.send({embed});
                } else if (Math.floor(Math.random() * 10) === 8) {
                    let embed = new Discord.RichEmbed()
                    .setTitle("**pqp velho**")
                    .setColor(0xFFFF00)
                .setAuthor('Mensagem de erro', message.author.avatarURL)
                  .setDescription("**Codigo:**" + "```" + message.content + "```" + "\n\n" + "**Erro:**" + "```" + err + "```")
                  message.channel.send({embed});
                } else if (Math.floor(Math.random() * 10) === 7) {
                    let embed = new Discord.RichEmbed()
                    .setTitle("**sai daqui!**")
                    .setColor(0xFFFF00)
                .setAuthor('Mensagem de erro', message.author.avatarURL)
                  .setDescription("**Codigo:**" + "```" + message.content + "```" + "\n\n" + "**Erro:**" + "```" + err + "```")
                  message.channel.send({embed});
                }else if (Math.floor(Math.random() * 10) === 6) {
                    let embed = new Discord.RichEmbed()
                    .setTitle("**q horror**")
                    .setColor(0xFFFF00)
                .setAuthor('Mensagem de erro', message.author.avatarURL)
                  .setDescription("**Codigo:**" + "```" + message.content + "```" + "\n\n" + "**Erro:**" + "```" + err + "```")
                  message.channel.send({embed});
                } else if (Math.floor(Math.random() * 10) === 5) {
                    let embed = new Discord.RichEmbed()
                    .setTitle("**Lê a porra da Docs**")
                    .setColor(0xFFFF00)
                .setAuthor('Mensagem de erro', message.author.avatarURL)
                  .setDescription("**Codigo:**" + "```" + message.content + "```" + "\n\n" + "**Erro:**" + "```" + err + "```")
                  message.channel.send({embed});
                } else if (Math.floor(Math.random() * 10) === 4) {
                    let embed = new Discord.RichEmbed()
                    .setTitle("**que burro da 0 pra ele,kkj**")
                    .setColor(0xFFFF00)
                .setAuthor('Mensagem de erro', message.author.avatarURL)
                  .setDescription("**Codigo:**" + "```" + message.content + "```" + "\n\n" + "**Erro:**" + "```" + err + "```")
                  message.channel.send({embed});
                } else if (Math.floor(Math.random() * 10) === 3) {
                    let embed = new Discord.RichEmbed()
                    .setTitle("**Caralho eu sou um merda mermão**")
                    .setColor(0xFFFF00)
                .setAuthor('Mensagem de erro', message.author.avatarURL)
                  .setDescription("**Codigo:**" + "```" + message.content + "```" + "\n\n" + "**Erro:**" + "```" + err + "```")
                  message.channel.send({embed});
                } else if (Math.floor(Math.random() * 10) === 2) {
                    let embed = new Discord.RichEmbed()
                    .setTitle("**Não**")
                    .setColor(0xFFFF00)
                .setAuthor('Mensagem de erro', message.author.avatarURL)
                  .setDescription("**Codigo:**" + "```" + message.content + "```" + "\n\n" + "**Erro:**" + "```" + err + "```")
                  message.channel.send({embed});
                } else if (Math.floor(Math.random() * 10) === 1) {
                    let embed = new Discord.RichEmbed()
                    .setTitle("**Irineu, quem errou o codigo não fui eu**")
                    .setColor(0xFFFF00)
                .setAuthor('Mensagem de erro', message.author.avatarURL)
                  .setDescription("**Codigo:**" + "```" + message.content + "```" + "\n\n" + "**Erro:**" + "```" + err + "```")
                  message.channel.send({embed});

                } else if (Math.floor(Math.random() * 10) === 0) {
                    let embed = new Discord.RichEmbed()
                    .setTitle("**.-.**")
                    .setColor(0xFFFF00)
                .setAuthor('Mensagem de erro', message.author.avatarURL)
                  .setDescription("**Codigo:**" + "```" + message.content + "```" + "\n\n" + "**Erro:**" + "```" + err + "```")
                  message.channel.send({embed});
                }
            }}
            log(warning(message.content));
    }