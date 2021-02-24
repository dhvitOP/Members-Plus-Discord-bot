const Discord = require("discord.js")
const db = require("quick.db")
const config = require("../config.json")
module.exports = {
    name: "createcode",
    aliases: ["createpremium", "getpremium"],
    description: "Show bot stats",
    execute: async (client, message, args) => {
  let owners = config.OwnerID;
  let code = args[0]
  if(!code) {
    let argsrequired = new Discord.MessageEmbed()
    .setTitle(`**An Invaild Usage**`)
    .setDescription(`Please insert a valid code for this!`)
    message.channel.send(argsrequired)
    return;
  }
  let codecheck = db.get(`botpremiumcodes`)
  let alreadyexist = new Discord.MessageEmbed()
  .setTitle(`Exisited Code`)
  .setDescription(`This Code It's already on the database please try to enter an other code`)
  if(codecheck && codecheck.find(find => find.premiumcodes == code)) return message.channel.send(alreadyexist);
  let codedata = {
   premiumcodes: code
  }
  if (!owners.includes(message.author.id)) return
  db.add(`totalcodes`, 1)
  let totalcodes = db.get(`totalcodes`)
  let embed = new Discord.MessageEmbed()
  .setTitle(`New Code Created With ${code} Name`)
  .setDescription(`Total Available Codes: ${totalcodes}`)
  message.channel.send(embed)
  db.push(`botpremiumcodes`, codedata)
}}