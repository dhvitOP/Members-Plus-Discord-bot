const Discord = require('discord.js')
const { get } = require('../constructors/sqlite.js')

module.exports = {
  execute: async(client, member, db) => {
   
    if (await db.fetch(`coins_${member.user.id}`) === null) return
    
    let data = await get(member, member.user)
    
    let time = Date.now() - member.user.createdTimestamp
    
    if (time < 86400000) {
		 return 
    } 
    
    if (data.code == 0) return
    
    let link = await client.fetchInvite(`https://discord.gg/${data.code}`)
    
    if (link === undefined) return
      
    //if (data.record.includes(member.user.id)) return
    
    if (data.joinedDate == 0) return
    
    let timeout = 259200000
      
    if (data.joinedDate === null || timeout - (Date.now() - data.joinedDate) < 1) {
        
      data.users.filter(x => x !== member.user.id)
        
      db.set(`users_${member.guild.id}`, data.users)
        
      db.set(`joinedDate_${member.guild.id}_${member.user.id}`, 0)
        
      return 
      } 
      
      db.subtract(`coins_${member.user.id}`, 3)
      
      data.logs.unshift(`[-3] - Left a server before 3 days have passed.`)
      
      db.set(`logs_${member.user.id}`, data.logs)
      
      data.users = data.users.filter(x => x !== member.user.id)
      
      db.set(`users_${member.guild.id}`, data.users)
      
      db.set(`joinedDate_${member.guild.id}_${member.user.id}`, 0) 
  }
} 