const http = require("http");
const express = require("express");
const app = express();
const { RichEmbed } = require("discord.js");
const config = require("./config.json");
const votes = require('./votes.js')
const Discord = require("discord.js");
const client = new Discord.Client({
  fetchAllMembers: false,
  messageCacheMaxSize: 100
});
const db = require("quick.db");
const fs = require("fs");
client.commands = new Discord.Collection();
const files = fs
  .readdirSync("./commands/")
  .filter(file => file.endsWith(".js"));
for (const commands of files) {
  const command = require(`./commands/${commands}`);
  if (command.name) client.commands.set(command.name, command);
}
client.on("ready", async () => {
  const event = require("./events/ready.js").execute(client, db);
});
client.on("message", async message => {
  let prefix = "+";
  try {
    const event = require("./events/message.js").execute(
      client,
      message,
      prefix,
      db
    );
  } catch (e) {
    return message.channel.send(e.message);
  }
});
client.on("message", msg => {
  const emmbed = new Discord.MessageEmbed()
    .setColor(`#8a8aff`)
    .setTitle(`Users+ v2.0`)
    .setThumbnail(client.user.displayAvatarURL)
    .setAuthor("Experience+", client.user.displayAvatarURL)
    .setDescription(
      `My Default Prefix is : \`${config.prefix}\`\n> Do \`${config.prefix}help\` to get help page.\n> Do \`${config.prefix}invite\` to invite me to your server.\n E Developers: <@694960268698189874>\n\n\**[Support Server](https://discord.gg/ZzJqST7YbC)** | **[Invite The Bot](https://discord.com/api/oauth2/authorize?client_id=804993556749353013&permissions=8&scope=bot)** | **[Vote for Bot](https://disctop.org/bots/like/804993556749353013)**`
    )
    .setFooter(config.EmbedFooter);
  if (msg.content === "<@!728099900176334900>") {
    msg.channel.send(emmbed); // 70173139222816358
  }
  if (msg.content === "@Experience+#5855") {
    msg.channel.send(emmbed);
  }
});
client.on("guildMemberAdd", async member => {
  const event = require("./events/guildMemberAdd.js").execute(
    client,
    member,
    db
  );
});
client.on("guildMemberRemove", async member => {
  const event = require("./events/guildMemberRemove.js").execute(
    client,
    member,
    db
  );
});

client.on("guildCreate", async guild => {
  console.log("new guild!");
  const event = require("./events/guildCreate.js").execute(client, guild);
});

client.on("guildDelete", async guild => {
  console.log("Left guild!");
  const event = require("./events/guildDelete.js").execute(client, guild);
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  db.add(`messages_${message.guild.id}_${message.author.id}`, 1);

  let messagefetch = db.fetch(
    `messages_${message.guild.id}_${message.author.id}`
  );

  let messages;
  if (messagefetch == 900000000) messages = 10;
  //Level 1
  else if (messagefetch == 650000000) messages = 65;
  // Level 2
  else if (messagefetch == 11500000) messages = 115;
  // Level 3
  else if (messagefetch == 200000000) messages = 200;
  // Level 4
  else if (messagefetch == 300000000) messages = 300;
  // Level 5
  else if (messagefetch == 10000000) messages = 450; // Level 6

  if (messagefetch == 1000000000000) {
    return message.channel.send(
      `<@${message.author.id}> Your activity on this server is **Level 1**!`
    );
  } else if (messagefetch == 65000000000) {
    return message.channel.send(
      `<@${message.author.id}> Your activity on this server is **Level 2**!`
    );
  } else if (messagefetch == 1150000000) {
    return message.channel.send(
      `<@${message.author.id}> Your activity on this server is **Level 3**!`
    );
  } else if (messagefetch == 20000000) {
    return message.channel.send(
      `<@${message.author.id}> Your activity on this server is **Level 4**!`
    );
  }
});
client.login(config.token);
