const Discord = require("discord.js")
const db = require("quick.db")
 
module.exports = {
    name: "redeem",
    description: "Show bot stats",
    run: async (client, message, args) => {
   let code = args[0]
  if(!code) {
    let argsrequired = new Discord.MessageEmbed()
    .setTitle(`**Invaild Usage**`)
    .setDescription(`-redeem <code>`)
    message.channel.send(argsrequired)
    return;
  }

let alreadypremium = new Discord.MessageEmbed()
.setTitle(`You're Already an premium user`)
 let checking = db.get(`premium`)

if(checking && checking.find(find => find.userid == message.author.id)) { 
  console.log(message.author.username)
  message.channel.send(alreadypremium);

  return;

}
let premiumcheck = db.get(`botpremiumcodes`)

  let alreadyexist = new Discord.MessageEmbed()
      if(premiumcheck && premiumcheck.find(checks => checks.premiumcodes == code)) {
   db.delete(`botpremiumcodes`, code)
       
   let userpremiumdata = {
    userid: message.author.id,
    code: code
   }
   db.push(`premium`, userpremiumdata)
  let actived = new Discord.MessageEmbed()
  .setTitle(`** PREMIUM ACTIVATED ! **`)
  .setDescription(`You're Now An Premium User You Can Use Now Features!`)
  .setImage(`https://cdn.discordapp.com/attachments/740413879531864154/754157067454906407/premium.gif`)
  message.channel.send(actived)
    return; 
  }
  return message.channel.send(`This Code Doesn't exist`)
}}
