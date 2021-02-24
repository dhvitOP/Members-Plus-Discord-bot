const Discord = require('discord.js');
const config = require('../config.json');
module.exports = {
  name: "remove",
  aliases: ["coinsremove", "removecoins"],
  description: "removed coins from a user, owner only.",
  execute: async(client, message, args, data, db) => {

    let owners = config.OwnerID;

    if (!owners.includes(message.author.id)) return;

    let pay = Number(args[1])
    if (!pay || isNaN(pay)) return message.channel.send(`**Incorrect Command!** ||Noob Owner||\nTry: *${config.prefix}remove <User> <coins>*`)

    let user = client.users.cache.find(user => args.length && message.mentions.users.size < 1 && user.username.toLowerCase().startsWith(args.slice(0, user.username.split(" ").length).join(" ").toLowerCase())) || client.users.cache.get(args[0]) || message.mentions.users.first()

    let subembed = new Discord.MessageEmbed()
    .setTitle(`Coins Removed!`)
    .setDescription(`<@${message.author.id}> Removed your **${pay}** coins!`)
    .setThumbnail(message.author.displayAvatarURL({ format: "png", dynamic: true }))
    .setFooter(config.EmbedFooter, message.author.displayAvatarURL({ format: "png", dynamic: true }))
    .setColor(`#fca903`)
    message.channel.send(subembed)
    user.send(subembed)
    db.subtract(`coins_${user.id}`, pay)
/*
    let logchannel = client.channels.cache.get("745349291756748832")
    let embed1 = new Discord.MessageEmbed()
    .setTitle('Removed Coins!')
    .setDescription(`User Name: **${user.username}**\nUser Id: **${user.id}**\nCoins Removed: **${pay}**\nRemoved by: <@${message.author.id}>`)
    .setFooter(config.EmbedFooter, user.displayAvatarURL({ format: "png", dynamic: true }))
    .setColor("#fca903")
    .setThumbnail(user.displayAvatarURL({ format: "png", dynamic: true }))
    logchannel.send(embed1)
*/
  }
}
