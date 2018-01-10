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

// Yooo, Coisas pro League Of Legends Brasil! -zerinho6
    if (message.content.toLowerCase() == "como ganho xp") {
		if (message.guild.id !== "207609115671920642") return;
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.setDescription("Quando você envia uma mensagem você recebe uma quantia de xp por minuto, não adianta floodar não vai funcionar.")
		.setTimestamp()  
		.setColor(message.member.highestRole.color)
		.setThumbnail(message.guild.iconURL)		
		message.channel.send({embed})
	} else if (message.content.toLowerCase() == "como ganho xp?") {
		if (message.guild.id !== "207609115671920642") return;
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.setDescription("Quando você envia uma mensagem você recebe uma quantia de xp por minuto, não adianta floodar não vai funcionar.")
		.setTimestamp()  
		.setColor(message.member.highestRole.color)
		.setThumbnail(message.guild.iconURL)		
		message.channel.send({embed})
	}
 
	if (message.content.toLowerCase() == "o que e esse nivel") {
		if (message.guild.id !== "207609115671920642") return;
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.setDescription("Quando você atinge certa quantia de xp você aumenta de **nivel**, quanto mais alto seu nivel mais xp necessario para aumentar.\n\nMas seu ranking no **!levels** tambem vai subir!")	
		.setTimestamp()
		.setImage("https://i.imgur.com/0eAUsu5.png")
		.setColor(message.member.highestRole.color)
		.setThumbnail(message.guild.iconURL)
		message.channel.send({embed})
	} else if (message.content.toLowerCase() == "o que e esse level") {
		if (message.guild.id !== "207609115671920642") return;
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.setDescription("Quando você atinge certa quantia de xp você aumenta de **nivel**, quanto mais alto seu nivel mais xp necessario para aumentar.\n\nMas seu ranking no **!levels** tambem vai subir!")	
		.setTimestamp()
		.setImage("https://i.imgur.com/0eAUsu5.png")
		.setColor(message.member.highestRole.color)
		.setThumbnail(message.guild.iconURL)
		message.channel.send({embed})
	}

	if (message.content.toLowerCase() == "como vejo meu nivel?") {
		if (message.guild.id !== "207609115671920642") return;		
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.setDescription("Digite ``!rank``, **no canal de comandos ou vai ser deletado.**")	
		.setTimestamp()
		.setImage("https://i.imgur.com/DRucuRP.png")
		.setColor(message.member.highestRole.color)
		.setThumbnail(message.guild.iconURL)
		message.channel.send({embed})

	}

	if (message.content.toLowerCase() == "como uso os bots de musica") {
		if (message.guild.id !== "207609115671920642") return;		
			let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.setDescription("Leia as mensagens fixadas no canal de musica.")	
		.setTimestamp()
		.setImage("https://i.imgur.com/vkCFkPK.png")
		.setColor(message.member.highestRole.color)
		.setThumbnail(message.guild.iconURL)
		message.channel.send({embed})
	} else if (message.content.toLowerCase() == "como uso os bots de musica?") {
		if (message.guild.id !== "207609115671920642") return;				
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.setDescription("Leia as mensagens fixadas no canal de musica.")	
		.setTimestamp()
		.setImage("https://i.imgur.com/vkCFkPK.png")
		.setColor(message.member.highestRole.color)
		.setThumbnail(message.guild.iconURL)
		message.channel.send({embed})
	} else if (message.content.toLowerCase() == "como uso os bots de música?") {
		if (message.guild.id !== "207609115671920642") return;				
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.setDescription("Leia as mensagens fixadas no canal de musica.")	
		.setTimestamp()
		.setImage("https://i.imgur.com/vkCFkPK.png")
		.setColor(message.member.highestRole.color)
		.setThumbnail(message.guild.iconURL)
		message.channel.send({embed})
	}

	if (message.content.toLowerCase() == "quais recompensas eu ganho?") {
		if (message.guild.id !== "207609115671920642") return;						
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.setDescription("Você ganha certos cargos que sobem você na lista ali do lado direito.")	
		.setTimestamp()
		.setImage("https://i.imgur.com/nG0adqk.png")
		.setColor(message.member.highestRole.color)
		.setThumbnail(message.guild.iconURL)
		message.channel.send({embed})	
	} else if (message.content.toLowerCase() == "quais recompensas eu ganho") {
		if (message.guild.id !== "207609115671920642") return;						
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.setDescription("Você ganha certos cargos que sobem você na lista ali do lado direito.")	
		.setTimestamp()
		.setImage("https://i.imgur.com/nG0adqk.png")
		.setColor(message.member.highestRole.color)
		.setThumbnail(message.guild.iconURL)
		message.channel.send({embed})	
	}

	if (message.content.toLowerCase() == "não escuto ninguém") {
		if (message.guild.id !== "207609115671920642") return;						
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.addField("Veja se a entrada de audio esta encaixada corretamente.",'Lembre-se entrada de audio não é o mesmo que saida, e a entrada de audio costuma ser verde.',true)
		.addField("Se você encaixou agora com o discord aberto aperte Ctrl+r e veja se estar funcionando.",'é um bug que ocorre comigo.',true)
		.addField("Vá em configurações veja se o Dispositivo de Entrada esta no Dispositivo correto.",'Engrenagem la em baixo>>>Voz e vídeo.',true)
		.addField("Se nada disso funcionou vá para o site de suporte do discord.",'https://support.discordapp.com/hc/pt-br',true)
		.setTimestamp()
		.setImage("https://i.imgur.com/5AZ9yy6.png")
		.setColor(message.member.highestRole.color)
		.setThumbnail(message.guild.iconURL)
		message.channel.send({embed})
	} else if (message.content.toLowerCase() == "não escuto ninguem") {
		if (message.guild.id !== "207609115671920642") return;						
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		addField("Veja se a saida de audio esta encaixada corretamente.",'Lembre-se saida de audio não é o mesmo que entrada, e a saida de audio costuma ser vermelha.',true)
		.addField("Se você encaixou agora com o discord aberto aperte Ctrl+r e veja se estar funcionando.",'é um bug que ocorre comigo.',true)
		.addField("Vá em configurações veja se o Dispositivo de Saida esta no Dispositivo correto.",'Engrenagem la em baixo>>>Voz e vídeo.',true)
		.addField("Se nada disso funcionou vá para o site de suporte do discord.",'https://support.discordapp.com/hc/pt-br',true)
		.setTimestamp()
		.setImage("https://i.imgur.com/5AZ9yy6.png")
		.setColor(message.member.highestRole.color)
		.setThumbnail(message.guild.iconURL)
		message.channel.send({embed})
	} else if (message.content.toLowerCase() == "nao escuto ninguem") {
		if (message.guild.id !== "207609115671920642") return;						
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.addField("Veja se a saida de audio esta encaixada corretamente.",'Lembre-se saida de audio não é o mesmo que entrada, e a saida de audio costuma ser vermelha.',true)
		.addField("Se você encaixou agora com o discord aberto aperte Ctrl+r e veja se estar funcionando.",'é um bug que ocorre comigo.',true)
		.addField("Vá em configurações veja se o Dispositivo de Saida esta no Dispositivo correto.",'Engrenagem la em baixo>>>Voz e vídeo.',true)
		.addField("Se nada disso funcionou vá para o site de suporte do discord.",'https://support.discordapp.com/hc/pt-br',true)
		.setTimestamp()
		.setImage("https://i.imgur.com/5AZ9yy6.png")
		.setColor(message.member.highestRole.color)
		.setThumbnail(message.guild.iconURL)
		message.channel.send({embed})
	}

	if (message.content.toLowerCase() == "não consigo falar") {
		if (message.guild.id !== "207609115671920642") return;						
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.addField("Veja se a entrada de audio esta encaixada corretamente.",'Lembre-se saida de audio não é o mesmo que entrada, e a saida de audio costuma ser verde.',true)
		.addField("Se você encaixou agora com o discord aberto aperte Ctrl+r e veja se estar funcionando.",'é um bug que ocorre comigo.',true)
		.addField("Vá em configurações veja se o Dispositivo de Entrada esta no Dispositivo correto.",'Engrenagem la em baixo>>>Voz e vídeo.',true)
		.addField("Se nada disso funcionou vá para o site de suporte do discord.",'https://support.discordapp.com/hc/pt-br',true)
		.setTimestamp()
		.setImage("https://i.imgur.com/5AZ9yy6.png")
		.setColor(message.member.highestRole.color)
		.setThumbnail(message.guild.iconURL)
		message.channel.send({embed})
	} else if (message.content.toLowerCase() == "nao consigo falar") {
		if (message.guild.id !== "207609115671920642") return;						
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.addField("Veja se a entrada de audio esta encaixada corretamente.",'Lembre-se saida de audio não é o mesmo que entrada, e a saida de audio costuma ser verde.',true)
		.addField("Se você encaixou agora com o discord aberto aperte Ctrl+r e veja se estar funcionando.",'é um bug que ocorre comigo.',true)
		.addField("Vá em configurações veja se o Dispositivo de Entrada esta no Dispositivo correto.",'Engrenagem la em baixo>>>Voz e vídeo.',true)
		.addField("Se nada disso funcionou vá para o site de suporte do discord.",'https://support.discordapp.com/hc/pt-br',true)
		.setTimestamp()
		.setImage("https://i.imgur.com/5AZ9yy6.png")
		.setColor(message.member.highestRole.color)
		.setThumbnail(message.guild.iconURL)
		message.channel.send({embed})
	} else if (message.content.toLowerCase() == "nao consigo fala") {
		if (message.guild.id !== "207609115671920642") return;						
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.addField("Veja se a entrada de audio esta encaixada corretamente.",'Lembre-se saida de audio não é o mesmo que entrada, e a saida de audio costuma ser verde.',true)
		.addField("Se você encaixou agora com o discord aberto aperte Ctrl+r e veja se estar funcionando.",'é um bug que ocorre comigo.',true)
		.addField("Vá em configurações veja se o Dispositivo de Entrada esta no Dispositivo correto.",'Engrenagem la em baixo>>>Voz e vídeo.',true)
		.addField("Se nada disso funcionou vá para o site de suporte do discord.",'https://support.discordapp.com/hc/pt-br',true)
		.setTimestamp()
		.setImage("https://i.imgur.com/5AZ9yy6.png")
		.setColor(message.member.highestRole.color)
		.setThumbnail(message.guild.iconURL)
		message.channel.send({embed})
	}

	if (message.content.toLowerCase() == "não consigo falar nem ouvir") {
		if (message.guild.id !== "207609115671920642") return;						
	   let embed = new Discord.RichEmbed()
	   .setAuthor(message.author.username, message.author.avatarURL)
	   .addField("O fone não ta conectado né?",'Caso esteja conectado aperte Ctrl + r.',true)
	   .addBlankField()
	   .setTimestamp()	  
	   .setColor(message.member.highestRole.color)	   
	   .addField("Se nada disso funcionou vá para o site de suporte do discord.",'https://support.discordapp.com/hc/pt-br',true)
	   message.channel.send({embed})
	} else if (message.content.toLowerCase() == "nao consigo falar nem ouvir") {
		if (message.guild.id !== "207609115671920642") return;						
	   let embed = new Discord.RichEmbed()
	   .setAuthor(message.author.username, message.author.avatarURL)
	   .addField("O fone não ta conectado né?",'Caso esteja conectado aperte Ctrl + r.',true)
	   .addBlankField()
	   .setTimestamp()	   
	   .setColor(message.member.highestRole.color)	   
	   .addField("Se nada disso funcionou vá para o site de suporte do discord.",'https://support.discordapp.com/hc/pt-br',true)
	   message.channel.send({embed})
	}

	if (message.content.toLowerCase() == "o discord não detecta meu microfone") {
		if (message.guild.id !== "207609115671920642") return;						
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)		
		.setColor(message.member.highestRole.color)
		.setTimestamp()	   
		.setDescription("Tenha certeza que ele esteja conectado no pc e que não esteja ruim, se não https://support.discordapp.com/hc/pt-br.")
		message.channel.send({embed})		
	} else if (message.content.toLowerCase() == "o discord nao detecta meu microfone") {
		if (message.guild.id !== "207609115671920642") return;						
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)		
		.setColor(message.member.highestRole.color)
		.setTimestamp()	   
		.setDescription("Tenha certeza que ele esteja conectado no pc e que não esteja ruim, se não https://support.discordapp.com/hc/pt-br.")
		message.channel.send({embed})		
	}

	if (message.content.toLowerCase() == "o bot não esta tocando") {
		if (message.guild.id !== "207609115671920642") return;	
		let embed = new Discord.RichEmbed()		
		.setAuthor(message.author.username, message.author.avatarURL)		
		.setColor(message.member.highestRole.color)
		.setTimestamp()	   
		.setDescription("Se você estiver na radio avise para um mod/adm se for bots das salas s1/s2/s3..etc.. **você** tem que botar as musicas para eles tocarem digitando por exemplo ``s1!play link da musica`` o comando da bot vai estar no nome do canal de voz.")
		message.channel.send({embed})
	} else if (message.content.toLowerCase() == "o bot nao esta tocando") {
		if (message.guild.id !== "207609115671920642") return;	
		let embed = new Discord.RichEmbed()		
		.setAuthor(message.author.username, message.author.avatarURL)		
		.setColor(message.member.highestRole.color)
		.setTimestamp()	   
		.setDescription("Se você estiver na radio avise para um mod/adm se for bots das salas s1/s2/s3..etc.. **você** tem que botar as musicas para eles tocarem digitando por exemplo ``s1!play link da musica`` o comando da bot vai estar no nome do canal de voz.")
		message.channel.send({embed})
	}

	if (message.content.toLowerCase() == "a musica esta travando") {
		if (message.guild.id !== "207609115671920642") return;			
		let embed = new Discord.RichEmbed()		
		.setAuthor(message.author.username, message.author.avatarURL)		
		.setColor(message.member.highestRole.color)
		.setTimestamp()	   
		.setDescription("Problemas no host do bot, infelizmente não podemos fazer nada.")
		message.channel.send({embed})
	}

	if (message.content.toLowerCase() == "como uso os bots?") {
		if (message.guild.id !== "207609115671920642") return;			
		let embed = new Discord.RichEmbed()		
		.setAuthor(message.author.username, message.author.avatarURL)		
		.setColor(message.member.highestRole.color)
		.setTimestamp()	   
		.setDescription("Veja as mensagens fixadas no canal de comandos.")
		message.channel.send({embed})
		message.channel.send("https://tenor.com/view/gif-9812518")		
	} else if (message.content.toLowerCase() == "como uso os bots") {
		if (message.guild.id !== "207609115671920642") return;			
		let embed = new Discord.RichEmbed()		
		.setAuthor(message.author.username, message.author.avatarURL)		
		.setColor(message.member.highestRole.color)
		.setTimestamp()	   
		.setDescription("Veja as mensagens fixadas no canal de comandos.")
		message.channel.send({embed})
		message.channel.send("https://tenor.com/view/gif-9812518")
	}
	
	if (message.content.toLowerCase() == "summon regras") {
		let embed = new Discord.RichEmbed()
		.setAuthor(message.guild.name, message.guild.iconURL)
		.setTimestamp()
		.setTitle("Regras do servidor.")
		.setDescription("Quem não seguir essas regras **vai ser punido**.\n P: = Punição")
		.addField("Nunca fale mal do elo de uma pessoa ou do main.",'P: mute ou kick.',true)
		.addField("Nunca poste links de rp gratis.",'P: Ban',true)
		.addField("Nunca faça flood ou spam",'P: mute/kick/ban',true)
		.addField("```Nunca marque staff atoa```",'P: ban/kick/mute',true)
		.addField("```TOTALMENTE PROIBIDO a venda de contas ou elojob```",'P:Ban',true)
		.addField("Pega a foto de alguém ou fingir ser outra pessoa",'P:ban/kick',true)
		.addField("Gore/Hentai/Porno/Homofobia/Racismo/Feminismo/NSFW,coisas desse tipo, Ecchi é permitido.",' P: mute/kick/ban',true)
		.addBlankField()
		.addField("```Como pegar cargo de elo?```",'Digite ``.iam elo`` na sala de comandos.',true)
		.addField("```Oq eu ganho sendo parceiro?```",'Cargo de parceiro,cargo de vip.',true)
		.addField("```Quem é o dono do canal?```",'dragonfirex1#2164',true)
		.addField("Não fique saindo e entrando varias vezes",'P: Ban',true)
		.setColor(0x65535)
		.setThumbnail(message.guild.iconURL)
		.setImage("https://cdn.discordapp.com/attachments/346445796776083466/373632535999283203/Spotlight.png")
		message.channel.send({embed})
	}
	if (startsWith('zerinho bot')) { 
		message.reply(":^");
	}
    if (message.content.toLowerCase() == "zerin") {
		message.channel.send("<@!134292889177030657>, estão falando de você.")
	}
	if ((includes('qual a') || includes('qual o')) && includes('prefix') && includes('zerinho')) {
		message.reply(config.prefix[0]);
	}
	}catch(e) {
		console.error(e);
	}
};
