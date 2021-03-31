const Discord = require("discord.js");
const ms = require("parse-ms");
const config = require("../config.json");
module.exports = {
  name: "stats",
  aliases: ["stats"],
  description: "",
  execute: async (client, message, args, data, db) => {
    let owners = config.OwnerID;

    

    let uptime = [];

    Object.entries(ms(client.uptime)).map((x, y) => {
      if (x[1] > 0 && y < 4) uptime.push(`**${x[1]} ${x[0]}**`);
    });

    const embed = new Discord.MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(`${client.user.username} stats`)
      .setThumbnail(client.user.displayAvatarURL())
      .addField(
        `📂Memory Usage:`,
        (process.memoryUsage().rss / 1024 / 1024).toFixed(2) + "MB",
        false
      )
      .addField(`🏘Servers Count:`, `${client.guilds.cache.size}`, false)
      .addField(`👥Users Count:`, `${client.users.cache.size}`, false)
      .addField(`Shards:`, `1`, false)
      .addField(`🗓 Creation Date -`, `6th February 2021`, false)
      .addField(`<a:wumpus_keyboard:807949412105191464> Made With :`, `Node.js V12 And SQ Lite DataBase And Your Love`, false)
      .addField(`:tools: Developers of This Bot -`, `<@698139730730024981> and <@694960268698189874>`, false)
      .addField(`⚙➡Prefix : `, `+`, false)
      .addField(`:chart_with_upwards_trend:Uptime:`, uptime.join(", "), false)
      .addField(`🤖INVITE ME`,`[ADD ME](https://discord.com/oauth2/authorize?client_id=${client.user.ID}&permissions=93185&scope=bot)`)
      .addField(`:pushpin:Support Server`,`[Support Server](${config.supportServer})`);
    message.channel.send(embed);
  }
};
//
