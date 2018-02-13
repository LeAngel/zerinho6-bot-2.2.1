const fs = require("fs");
const config = require('../config.json');
let database = JSON.parse(fs.readFileSync('./database/serversconfig.json', 'utf8'));
const Discord = require('discord.js')

exports.run = function(message) {
  try{

	if (message.channel.type === 'dm' || message.author.bot || !message.channel.permissionsFor(this.user.id).has('SEND_MESSAGES')) {
		return;
	}

	// VARS & FUNCTIONS
	function startsWith(name) {
		return message.content.toLowerCase().startsWith(name.toLowerCase());
	}

	function includes(name) {
		return message.content.toLowerCase().includes(name);
	}

	message.prefix = config.prefixes.find((p) => startsWith(p)) || null; // Obrigado tsu
	let args = message.content.split(' ');

	if (message.guild && database[message.guild.id]) {

	  let databaseGuild = database[message.guild.id];
	  let commandGuild = databaseGuild.comandos[message.content] || null;

		if (commandGuild) {
		    message.channel.send(commandGuild);
		}

	}

	if (message.prefix && args[0]) {

		let name = args[0].slice(message.prefix.length).toLowerCase();
		let Comands = fs.readdirSync('./comandos').map((c) => c.replace(/.js/gi, '').toLowerCase());
		let Command = Comands.includes(name) ? require(`../comandos/${name}.js`) : null;

			if (Command) {
				Command.run(this, message, args.slice(1));
			}
	
	}
	  if (message.content.toLowerCase() == "ze.horario") {
         if(!message.channel.permissionsFor(this.user.id).has('EMBED_LINKS')) return embedperm(message)
     var hora_atual = parseInt(timestamp('HH'));
    if (hora_atual >= 0 && hora_atual <= 24) {
        var fuso_horario = -2;
        var hora_no_fuso_autal = (hora_atual + 24 + fuso_horario)%24;
        
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription("Hora: " + hora_no_fuso_autal + ":" + timestamp('mm:ss'))
        if (message.member.highestRole.color !== undefined) {
               embed.setColor(message.member.highestRole.color)
        }
        message.channel.send(embed)
    }
}
	  
	if ((includes('qual a') || includes('qual o')) && includes('prefix') && includes('zerinho')) {
		message.reply(config.prefix[0]);
	}
	  
	}catch(e) {
		console.error(e);
	}
};
