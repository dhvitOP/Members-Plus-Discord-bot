const Discord = require('discord.js');
const config = require('../config.json');
module.exports = {
  name: "OP",
  aliases: ["op", "Op"],
  description: "",
  execute: async(client, message, args, data, db) => {
  let user = client.users.cache.find(user => args.length && message.mentions.users.size < 1 && user.username.toLowerCase().startsWith(args.slice(0, user.username.split(" ").length).join(" ").toLowerCase())) || client.users.cache.get(args[0]) || message.mentions.users.first()
  let message1 =  user.username.toLowerCase().startsWith(args.slice(0, user.username.split(" ").length).join(" ").toLowerCase()) || message.mentions.users.first()
    let embed = new Discord.MessageEmbed()
    .setDescription(`why should i tell him/her ${message1} op`, true)
    .addField(`-------------`, `#Only Owners OP`, false);
   message.channel.send(embed);   
  }
  }
//delete this file = free ka chappal