const Discord = require('discord.js')

module.exports = {
  execute: async(client, db) => {
   
    console.log(`I am ready`)
 
    client.user.setActivity(`+help | +invite | with v2.5`, { type: "PLAYING" }) 

  } 
}
