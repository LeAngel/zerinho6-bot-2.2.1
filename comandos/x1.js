const Discord = require("discord.js")
exports.run = (bot,message,args) => {
let argsSeparacaoPorBarra = message.content.split(' ').slice(1).join(' ').split(' | ');
    let argsJunto = message.content.split(" ").slice(1).join(' ');
    var conta = Math.floor(Math.random() * 50)
       if(message.channel.permissionsFor(bot.user.id).has('EMBED_LINKS')) {

         if (argsJunto < 1) {
        	message.reply("Você não botou nada apos o comando")
         } else if (argsSeparacaoPorBarra[1] === undefined) {
         	message.reply("Você fez errado, exemplo: ze.x1 hellow | zerinho6")
         } else {
         	try {
         		let embed = new Discord.RichEmbed();
         		embed.setAuthor(message.author.username, message.author.avatarURL);
         		embed.setTimestamp();
         		embed.setTitle("XI")
         		embed.setImage("https://i.imgur.com/7FwzGWT.png");
         		embed.setDescription(`${argsSeparacaoPorBarra[0]} VS ${argsSeparacaoPorBarra[1]}`)
         		message.channel.send(embed).then(message => {
         			           setTimeout(() => {
                embed.setAuthor(message.author.username, message.author.avatarURL);
         		embed.setTimestamp();
         		embed.setTitle("EOQ,FON.")
         		embed.setImage("https://i.imgur.com/jh6s2A8.png");
         		if (conta > 25) {
         		embed.setDescription(`O ${argsSeparacaoPorBarra[0]} venceu, RX!\n**Debug:** ${conta}`)
         	} else if (conta == 25) {
         		         		embed.setDescription(`Empate, lel.\n**Debug:** ${conta}`)
         	} else if (conta < 25) {
         		         		embed.setDescription(`O ${argsSeparacaoPorBarra[1]} venceu, RX!\n**Debug:** ${conta}`)
         	}
         	      message.edit({embed});
         			                            }, 5000)
         		})
         	} catch (err) {
         		message.reply(`:open_mouth: | Aconteceu um erro inesperado!\n${err}`)
         	}
         }

    }
}
