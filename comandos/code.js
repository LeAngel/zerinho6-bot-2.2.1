const Discord = require("discord.js");
const fs = require("fs");
exports.run = (bot, message, args) => {
    let argsJunto = message.content.split(" ").slice(1).join(' ');
    const i = ['help','kick','prune','serverinfo','translate','userinfo'];
    const delay = a => a.content.includes("ze.code")
	if  (!!i.find(s => argsJunto.includes(s))) {
		message.channel.send("esse comando é muito grande! Não posso enviar ele :cry:.")
	} else {
      	fs.readFile(`comandos/${argsJunto}.js`, 'utf8' ,(err, data) => {
        	if (err) return  message.channel.send(`:open_mouth: | Parece que deu um erro inesperado!\n\n${err}`);
        	message.channel.send("```JavaScript\n" + data + "```");
		});
	}
}
