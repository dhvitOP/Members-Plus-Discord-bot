const Discord = require('discord.js');
const { get } = require('../constructors/sqlite.js');
const config = require('../config.json');
module.exports = {
  name: "vote",
  execute: async(client, message, args, data, db) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#8a8aff")
    .setAuthor(client.user.username, client.user.displayAvatarURL)
    .setTitle(`Vote for experience+`)
    .setThumbnail(client.user.displayAvatarURL) 
   .setDescription('**__TOP.GG__**\n[AVAILABLE NOW](https://top.gg/bot/804993556749353013/vote)/n/n **__DISCTOP.ORG**\n[AVAILABLE NOE]()')

    .setFooter(config.EmbedFooter)
    message.channel.send(embed) 

  } 
}
