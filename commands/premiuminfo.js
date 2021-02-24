const Discord = require("discord.js");
const ms = require("parse-ms");
const config = require("../config.json");
module.exports = {
  name: "premiuminfo",
  aliases: ["infopremium", "help premium"],
  description: "shows the bot premium information ",
  execute: async (client, message, args, data, db) => {      
  
     const embed = new Discord.MessageEmbed()
    .setColor(`RANDOM`)
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setTitle(`${client.user.username}`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`If you need more help, feel free to ask our support team in the server https://discord.gg/ZzJqST7YbC`)
    .addField(`-THE PREMIUM WILL ALLOW YOU TO ACESS GIFTCODE COMMANDS

-1): YOU CAN CREATE COINS GIFTCODE 
-2): YOU CAN REDEEM COINS GIFTCODE 
-IF YOU DONT KNOW WHAT IS GIFTCODE DO +giftcode`, false);
 message.channel.send(embed);
  }
};