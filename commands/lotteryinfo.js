const Discord = require('discord.js')
module.exports = {
  name: "lotteryinfo",
  description: "SHows the information of the lottery.",
  execute: async(client, message, args, data, db) => {
 const embed = new Discord.MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(`${client.user.username} LotteryInfo`)
      .setThumbnail(client.user.displayAvatarURL())
      .addField(`Guys we are happy to announce Lottery is finally Launched!!!`, `:tada: :tada:`, false)
      .addField(`How to Participate -`, `Do + lottery and You will be participated But You need atleast 10 Coins To Participate`, false)
      .addField(`How Lottery Works -`, `The Lottery Works With a Method That The Participatents Will Pay And all Money of Participatants(total gathered) will give to Winner of Lottery`, false);
      message.channel.send(embed);
  }
}