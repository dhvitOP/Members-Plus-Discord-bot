const Discord = require("discord.js");
const config = require("../config.json");
module.exports = {
  name: "botinfo",
  aliases: ["bi", "infobot"],
  description: "shows the bot information ",
  execute: async (client, message, args, data, db) => {      
     const embed = new Discord.MessageEmbed()
    .setColor(`RANDOM`)
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setTitle(`${client.user.username}`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`If you need more help, feel free to ask our support team in the server ${config.supportServer}`)
    .addField(`Here's what we - 
THIS IS A J4J BOT WHICH ALSO HELP YOU TO GROW YOUR SERVER FASTLY BUT YOU CAN'T DO IT FOR FREE YOU HAVE TO PLAY WITH BOT AND COLLECT SOME COINS BY PLAYING ECONOMY THEN YOU CAN USE THE COINS TO GET MEMBERS AND GROW YOUR SERVER FASTLY`, false)
    .addField(`How to use the coins and get j4j servers  -How to joins j4j servers: If you type +f or +find you will get some servers where j4j is allowed and you can join the server if you want to join`, false)
    .addField(`How to register our own server to get members: `, `Firstly type +bal to check how much coins you have now type +buy 10 you can type any amount of no. If you have enough coins like if you type +buy 5 then you server will Able to get access to join 5 members if you type +buy 20 then your server will get access to get 20 members`, false)
    .addField(`IF YOU NEED ORDERS FASTER FOLLOW OUR INSTRUCTIONS - \n\ Boost our support server to get 75% xp boost or vote our bot to get 10% xp boost`, false) 
    .addField(`Invite me`, `[Click here](https://discord.com/oauth2/authorize?client_id=804993556749353013&permissions=93185&scope=bot)`, false);
    message.channel.send(embed);
  }
};
