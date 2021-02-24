const Discord = require('discord.js')
const config = require('../config.json');
module.exports = {
  name: "act",
  aliases: ["activity", "points", "earning"],
  execute: async(client, message, args, data, db) => {
    let user = message.guild.members.cache.get(member => args.length && message.mentions.users.size < 1 && member.user.username.toLowerCase().startsWith(args.join(" ").toLowerCase())) || message.author
    
    //if we got an user by name, we must access to the user property 
    if (user.username === undefined) user = user.user

    if(!message.content.startsWith('-'))return;  
    let messagefetch = db.fetch(`messages_${message.guild.id}_${message.author.id}`)
    let levelfetch = db.fetch(`level_${message.guild.id}_${message.author.id}`)
    if(messagefetch == null) messagefetch = '0';
    if(messagefetch >= '10') {
    db.add(`coins_${user.id}`, 1)
    data.logs.unshift(`[+1] - Server Activity.`)
    db.set(`logs_${user.id}`, data.logs)
    db.subtract(`messages_${message.guild.id}_${message.author.id}`, 10) 
    messagefetch = '0'
    };

    messagefetch = messagefetch / 10
 

  } 
}
