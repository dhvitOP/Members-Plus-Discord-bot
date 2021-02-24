const Discord = require('discord.js');
const config = require('../config.json');
const db = require('../constructors/sqlite.js')
const command = require('./Command.js')
module.exports = {
  name: "servers-list",
  aliases: ["servers", "server-list"],
  description: "unbans an user from the bot, owner only.",
  execute: async(client, message, args, data, db) => {


    let owners = config.OwnerID;

    if (!owners.includes(message.author.id)) return
    command(client, 'servers', (message) => {
    client.guilds.cache.forEach((guild) => {
      message.channel.send(
        `${guild.name} has a total of ${guild.memberCount} members`
      )
    })
  })
  }
}