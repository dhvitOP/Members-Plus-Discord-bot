const Discord = require('discord.js')

module.exports = {
  execute: async(client, db) => {
   
    console.log(`I am ready`)
 
    client.user.setActivity(`Bot made by Dhvit and akshat original is Experience+`, { type: "PLAYING" }) 

  } 
}
