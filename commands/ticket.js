const Discord = require('discord.js')
const { get } = require('../constructors/sqlite.js')

module.exports = {
  name: "ticket",
  aliases: ["lotterybuy", "lottery"],
  description: "used to buy a ticket to get in the lottery.",
  execute: async(client, message, args, data, db) => {
   
   console.log(data.ticket)
    
    
     
    if (data.ticket >= 1) return message.channel.send(`${message.author.username} can't buy more than 1 tickets!`)
     
    let users = await db.fetch(`users_0`)
    if (users === null) users = [] 
    
    if (data.coins < 10) return message.channel.send(`You don't have enough coins to buy a lottery ticket. Needs 10 Coins to buy`)
    
    message.channel.send(`${message.author.username} You've successfully bought a lottery ticket!`)
    
    users.push(message.author.id)
    
    data.logs.unshift(`[-10] - Bought a lottery ticket.`)
    
    db.set(`logs_${message.author.id}`, data.logs)
    
    db.set(`users_0`, users)
    db.subtract(`coins_${message.author.id}`, 5)
    db.add(`ticket_${message.author.id}`, 1)
  } 
} 
