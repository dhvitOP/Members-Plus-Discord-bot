const Discord = require('discord.js')

module.exports = {
  execute: async(client, guild) => {
    
    let channel = client.channels.cache.get("804964905408004106")
  
    const embed = new Discord.MessageEmbed()
    .setTitle(`Left Server!`)
    .setColor(`#19ec1d`)
    .setDescription(`Name & Id: **${guild.name}(\`${guild.id})\`**\nTotal Users: **${guild.memberCount}**\nOwner: **${guild.owner.user.tag}(\`${guild.owner.id}\`)**`)
    .setThumbnail(guild.iconURL())
    if (channel) channel.send(embed)  
    
  } 
} 