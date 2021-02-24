const Discord = require('discord.js');
const config = require('../config.json');
module.exports = {
  name: "dhvit",
  aliases: ["dhvitop", "dhvitOP"],
  description: "",
  execute: async(client, message, args, data, db) => {
    let user = client.users.cache.find(user => args.length && message.mentions.users.size < 1 && user.username.toLowerCase().startsWith(args.slice(0, user.username.split(" ").length).join(" ").toLowerCase())) || client.users.cache.get(args[0]) || message.mentions.users.first()

    let embed = new Discord.MessageEmbed()
    .addField(`#DHVITOP BOLTE`, `#BOT DEVELOPER BHAIYA OP`);
   message.channel.send(embed); 
 
  }
}
//delete this file = free ka chappal