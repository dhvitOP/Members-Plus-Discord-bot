const Discord = require('discord.js')
const config = require('../config.json')
module.exports = {
  name: "lotterystats",
  description: "stats of the lottery, owner only.",
  execute: async(client, message, args, data, db) => {

    let owners = config.OwnerID;
    
    if (!owners.includes(message.author.id)) return
    
    let users = await db.fetch(`users_0`)
    
    if (users === null) users = []
    
    let handler = users
    
    users = []
    
    handler.map(x => {
      if (!users.includes(x)) users.push(x) 
    })
    
    let money = 10 * users.length
    
    let embed = new Discord.MessageEmbed()
    .setColor(config.embedColor)
    .setTitle(`Lottery Participants:`)
    .addField(`Participants:`, users.length, false)
    .addField(`Reward:`, money + " coins", false)
    .setThumbnail(client.user.displayAvatarURL)
    .setFooter(`Type +end to select the winner!`)
    message.channel.send(embed) 
  } 
} 