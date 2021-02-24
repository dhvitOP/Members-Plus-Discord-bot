const Discord = require('discord.js')
const ms = require('parse-ms') 
const config = require('../config.json');
module.exports = {
  name: "check",
  aliases: ["time"],
  description: "shows you the time left to be able to leave safety.",
  execute: async(client, message, args, data, db) => {
   
    let timeout = 259200000
    
    let time = []
    
    if (data.joinedDate !== null && timeout - (Date.now() - data.joinedDate) > 999) {
      Object.entries(ms(timeout - (Date.now() - data.joinedDate))).map((x, y) => {
        if (x[1] > 0 && y < 4) time.push(`**${x[1]} ${x[0]}**`)      })
      

      const noembed = new Discord.MessageEmbed()
      .setColor('#ac1f1f')
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setTitle(`Server check for ${message.author.username}`)
      .setThumbnail(message.channel.guild.iconURL())
      .setDescription(`You will lose 10 coins if you leave now!`)
     //.setImage(`https://cdn.discordapp.com/attachments/739787130544455762/751824030784290896/userleave.gif`)
      .addField(`Time remaining:`, time.join(", "), false)
      .setFooter(config.EmbedFooter)
      message.channel.send(noembed)   
     } else {
      const embed = new Discord.MessageEmbed()
      .setColor('#1fa03c')
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setTitle(`Server check for ${message.author.username}`)
      .setThumbnail(message.channel.guild.iconURL())
     //.setImage(`https://cdn.discordapp.com/attachments/739787130544455762/751824929892204584/userwithoutleave.gif`)
      .setDescription(`You can leave the server without losing any coins.`)
      .setFooter(config.EmbedFooter)
      message.channel.send(embed) 
    } 
  } 
}