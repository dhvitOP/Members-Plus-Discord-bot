const Discord = require('discord.js')
const config = require("../config.json")
module.exports = {
  execute: async(client, guild) => {
    
    let channel = client.channels.cache.get(config.logChannel)
  
    const embed = new Discord.MessageEmbed()
    .setTitle(`Left Server!`)
    .setColor(`#19ec1d`)
    .setDescription(`Name & Id: **${guild.name}(\`${guild.id})\`**\nTotal Users: **${guild.memberCount}**\nOwner: **${guild.owner.user.tag}(\`${guild.owner.id}\`)**`)
    .setThumbnail(guild.iconURL())
    if (channel) channel.send(embed)  
    
  } 
} 
