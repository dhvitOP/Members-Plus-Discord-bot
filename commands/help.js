const Discord = require('discord.js');
const config = require('../config.json');
module.exports = {
  name: "help",
  aliases: ["help"],
  description: "displays the bot commands list.",
  execute: async(client, message, args, data, db) => {
     const embed = new Discord.MessageEmbed()
    .setColor(`RANDOM`)
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setTitle(`${client.user.username} v2.0`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`If you need more help, feel free to ask our support team in the server https://discord.gg/ZzJqST7YbC`)
    .addFields(
      { name: `+help`, value: `Shows the help command. [invite Me]()`, inline: true},
      { name: `+invite`, value: `Invite the bot to your server. [invite Me]()`, inline: true},
      { name: `+bal | +balance`, value: `Check your coins balance. [invite Me]()`, inline: true },
      { name: `+f | +find`, value: `Find some servers to join for coins. [invite Me]()`, inline: true },
      { name: `+pay`, value: `Pay some coins to other. [invite Me]()`, inline: true},
      { name: `+check`, value: `Check where you can leave servers. [invite Me]()`, inline: true},
      { name: `+order | +info`, value: `See your order information. [invite Me]()`, inline: true},
      { name: `+buy`, value: `To buy users in your server. [invite Me]()`, inline: true} ,
      { name: `+vote`, value: `Vote and get 1 coin. [invite Me]()`, inline: true},
      { name: `+giftcode`, value: `To convert your coins into gift code. [invite Me]()`, inline: true},
      { name: `+botinfo`, value: `It gives you the bot information. [invite Me]()`, inline: true},
      { name: `+stats`, value: `It gives you the detailed stats of bot. [invite Me]()`, inline: true})
  
    .setFooter(``)
    message.channel.send(embed).catch(e => message.channel.send(`I don't have permission to send embed message here!`)) 
  }
}