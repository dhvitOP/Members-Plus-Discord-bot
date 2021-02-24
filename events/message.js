const Discord = require('discord.js')
const { get } = require('../constructors/sqlite.js') 
const freecoins = require('../events/coins.js')
const ms = require('ms')
const parse = require('parse-ms')
const config = require('../config.json')
module.exports = {
  execute: async(client, message, prefix, db) => {
       prefix = config.prefix;
    if (message.author.bot || message.channel.type === "dm") return
    
   // freecoins.execute(client, message, db)
    
    let args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g);
    let x = args.shift().toLowerCase();

    if (!message.content.startsWith(prefix) || !x) return;
    
    let command = client.commands.get(x) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(x))
    
    if (!command) return
    
    let time = Date.now() - message.author.createdTimestamp
    
    if (time < 6000 ) {
      let text = []
      time = Date.now() - message.author.createdTimestamp
      console.log(time) 
      time = 6000 - time 
      Object.entries(parse(time)).map((x, y) => {
        if (x[1] > 0 && y < 4) text.push(`**${x[1]} ${x[0]}**`) 
      })
      
      return message.channel.send({
        embed: {
          color: 16711680,
          title: `Sorry, ${message.author.username}.`,
          description: "To be able to use the bot, your account must have been created more than 1 min ago", 
          fields: [
            {
              name: "You have to wait:",
              value: text.join(", ") 
            } 
          ] 
        }
      }) 
    } 
    //right now, data will be set to 0
    //since it's a lot of work and it's late for me
    let data = await get(message, message.author) 
    
    if (data.banned == true && message.author.id !== "326758437642043393") return message.channel.send(`${message.author.username} you're banned from this bot.`)
    
    try {
   command.execute(client, message, args, data, db)
    } catch(e) {
      message.channel.send(e.message)
    } 
  } 
} 