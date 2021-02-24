const Discord = require('discord.js');
const config = require('../config.json');
module.exports = {
  name: "Op",
  aliases: ["ownerop", "OPo"],
  description: "adds coins to an user, owner only.",
  execute: async(client, message, args, data, db) => {
//
    let owners = config.OwnerID;

    //let data = await get(member, member.user)

    if (!owners.includes(message.author.id)) return

    

    

    let user = message.mentions.users.first()
    let embed = new Discord.MessageEmbed()
    .setDescription(`# ${user} OPBOLTE`) 
    .addField(`-----------`, `#OPBOLTE 😎`);
    message.channel.send(embed);
    
    
    
    
    }
  }
