const Discord = require('discord.js')
const config = require('../config.json')
module.exports = {
  name: "advertise",
  aliases: ["buy"], 
  description: "used to advertise your server and get members on your Server.",
  execute: async(client, message, args, data, db) => {

    let amount = Number(args[0])

    var description = args.slice(1).join(" ")
    if(!description)
    {
      var description = "No Desciption has been set";
      }
    let needatleastcoins = new Discord.MessageEmbed()
    .setTitle(`Error!`)
    .setDescription(`<@${message.author.id}> You need at least **6** coins to buy users in your server.`)
    .setColor("RED")
    .setFooter(config.EmbedFooter)
    .setImage('https://cdn.discordapp.com/attachments/801320007077593111/805374099781713960/350kb_1.gif')
    if(amount < 6) return message.channel.send(needatleastcoins)
    if (data.coins < 6) return message.channel.send(needatleastcoins)
    let incorrectcommand = new Discord.MessageEmbed()
    .setTitle(`Error!`)
    .setDescription(`<@${message.author.id}> BRUH. This command is incorrect. In order to buy users in your server, do \`-buy <NumberOfCoins> <Description>\` \nNote: No need to put \`<>\``)

    if (!amount || isNaN(amount) || amount < 1) return message.channel.send(`Commanding incorrect!\nIn order to buy users for your server do \`${config.prefix}buy <numberOfCoins> <description>\` [1 coin = 1 user]`)

    if (amount > data.coins) return message.channel.send(`${message.author.username} you don't have enough coins to buy users in your server.\n`)

    amount = Math.round(amount)

    let link = data.code

    if (link == 0) {
      link = await message.channel.createInvite({ maxAge: 0 })

      link = link.code
    }

    await client.fetchInvite('https://discord.gg/' + link).catch(async x => {
      link = await message.channel.createInvite({ maxAge: 0 })
      link = link.code
      console.log(link)
    })

    if (description && description.includes("discord.gg")) return message.channel.send(`Unfortunately I don't accept invite links in description. Remove them please!`)
    if (description && description.includes("https://", "http://")) return message.channel.send(`I don't accept Website and Server links`)
    if (description && description.length > 50) return message.channel.send(`The message exceed the limit of 50 words`)
    


    await new Promise(resolve => setTimeout(resolve, 10))

    db.set(`code_${message.guild.id}`, link)

    data.logs.unshift(`[-${amount}] - Advertise ${message.guild.name}(${message.guild.id}) server.`)

    db.set(`logs_${message.author.id}`, data.logs)

    db.set(`description_${message.guild.id}`, `${description === undefined ? "" : description}\nhttps://discord.gg/${link}`)

    db.add(`orders_${message.guild.id}`, amount)

    db.subtract(`coins_${message.author.id}`, amount)
    
    let successembed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setTitle(`Server Orders`)
    //*.setImage(`https://cdn.discordapp.com/attachments/801320007077593111/805370070070853652/350kb.gif`)
    .setDescription(`[<@${message.author.id}>] You have successfully bought users for your server\n **__NOTE__** Your sevrer to be upload will take some time.`)
    .addFields([
      {name: "Amount Paid", value: `**${amount}** coins`},
      {name: "You will get", value: `**${amount}** users`},
      {name: "+info | +orders", value: `Check current orders of **${client.guilds.cache.get(message.guild.id).name}**`}
    ])
    .setFooter(config.EmbedFooter)
    message.channel.send(successembed);
    
    let logchannel = client.channels.cache.get(config.logChannel)
    let embed = new Discord.MessageEmbed()
    .setTitle('User made Orders')
    .setColor("YELLOW")
    .setFooter(`experience+ v2.0 | 2020 (C) | https://discord.gg/ZzJqST7YbC`)
    .addField(`Server name:`, `${message.guild.name}`, false)
    .addField(`Server Id:`, `${message.guild.id}`, false)
    .addField(`Amount of Orders`, `${Number(args[0])}`, false) 
    .addField(`Description`, `${description}`, false)
    .setThumbnail(message.author.displayAvatarURL({ format: "png", dynamic: true }));
    logchannel.send(embed);
    
  }
}
