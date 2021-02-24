const Discord = require('discord.js');
const config = require('../config.json');
module.exports = {
  name: "addbal",
  aliases: ["addcoins", "add"],
  description: "adds coins to an user, owner only.",
  execute: async(client, message, args, data, db) => {
//
    let owners = config.OwnerID;

    //let data = await get(member, member.user)

    if (!owners.includes(message.author.id)) return

    let pay = Number(args[1])

    if (!pay || isNaN(pay)) return message.channel.send(`**Command incorrect!** ||Noob Owner||\n**Try:** \`${config.prefix}bal <MentionAUser> <Coins>\``)

    let user = message.mentions.users.first()
    let logchannel = client.channels.cache.get("804964973028704286")
    let embed = new Discord.MessageEmbed()
    .setTitle('Owner Command')
    .setDescription(`**Owner Name: <@${message.author.id}>!**\n\nAdded **${pay}** coins to <@${user.id}>`)
    .setColor('#ff7542')
    .setThumbnail(user.displayAvatarURL({ format: "png", dynamic: true }))
    .setFooter(config.EmbedFooter, user.displayAvatarURL({ format: "png", dynamic: true }))
    message.channel.send(embed)
    logchannel.send(embed)
    db.add(`coins_${user.id}`, pay)
  }
}
