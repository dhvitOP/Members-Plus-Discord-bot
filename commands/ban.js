const Discord = require('discord.js');
const config = require('../config.json');
module.exports = {
  name: "ban",
  description: "bans an user from using the bot, owner only.",
  execute: async(client, message, args, data, db) => {

    let owners = config.OwnerID;
    
    if (!owners.includes(message.author.id)) return
    
    let user = client.users.cache.find(user => args.length && message.mentions.users.size < 1 && user.username.toLowerCase().startsWith(args.slice(0, user.username.split(" ").length).join(" ").toLowerCase())) || client.users.cache.get(args[0]) || message.mentions.users.first()
    
    if (user === undefined) return message.channel.send(`**I can't able to find this user!**`)
    
    let reason = args.slice(1).join(" ")
    
    if (!reason) reason = `Null`
    
    let embed1 = new Discord.MessageEmbed()
    .setTitle('User Banned!')
    .setDescription(`User Name: **${user.username}**\nUser Id: **${user.id}**\nBanned Reason: **${reason}**\nBanned by: <@${message.author.id}>`)
    .setThumbnail(user.displayAvatarURL({ format: "png", dynamic: true }))
    .setFooter(config.EmbedFooter)
    message.channel.send(embed1)

    let bannedchannel = client.channels.cache.get(config.logChannel)
    let embed = new Discord.MessageEmbed()
    .setTitle('User Banned!')
    .setDescription(`User Name: **${user.username}**\nUser Id: **${user.id}**\nBanned Reason: **${reason}**\nBanned by: <@${message.author.id}>`)
    .setThumbnail(user.displayAvatarURL({ format: "png", dynamic: true }))
    .setFooter(config.EmbedFooter)
    bannedchannel.send(embed)
    user.send(embed)

    db.set(`banned_${user.id}`, true) 
  } 
}
