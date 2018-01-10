const Discord = require("discord.js");
const moment = require('moment');
const fs = require("fs");
const config = require("./config.json");

const bot = new Discord.Client();

  bot.prefix = config.prefix;

moment.locale('pt-BR');


fs.readdir("./eventos/", (err, files) => {
      if (err) {
        throw err;
      }

      files.forEach((file) => {
          try{
            bot.on(file.replace(/.js/gi, ''), require('./eventos/'+file).run);
          } catch(e) {
            console.error(`Error load event ${file}`, e);
          }
      }); 
});

bot.login(config.token);
