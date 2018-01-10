const Discord = require("discord.js")
var startTime = Date.now(); 
    var endTime = Date.now()
exports.run = (bot, message, args) => {
 var startTime = Date.now(); 
   message.channel.send("Ping...").then((message) => { endTime = Date.now(); message.edit(`${Math.round(endTime - startTime)}**ms**` + "\n" + `**RAM:**` + `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB\n\u200B`); 
});
}