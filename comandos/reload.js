const Discord = require("discord.js");
var moment = require('moment');
moment.locale('pt-BR');
const fs = require("fs")
const config = require("../config.json")
exports.run = (bot, message, args) => {
	let argsJunto = message.content.split(" ").slice(1).join(' ')
	if(message.author.id === config.dono) {
    if(argsJunto.length < 1) {
    	message.channel.send(`Diga o comando para ser resetado...`); 
    } else {
    	delete require.cache[require.resolve(`./${args[0]}.js`)];
    	message.channel.send(' O comando `' + argsJunto + '` foi resetado... '); 
    }
  // the path is relative to the *current folder*, so just ./filename.js
} else {
  	message.channel.send('Você não pode fazer esse comando... ')
  }
}