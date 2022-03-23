const Discord = require('discord.js')
const { get } = require('../constructors/sqlite.js')

module.exports = {
  name: "bakiye",
  aliases: ["coinler"],
  description: "displays the user's balance.",
  execute: async(client, message, args, data, db) => {
   
    let user = message.guild.members.cache.get(member => args.length && message.mentions.users.cache.size < 1 && member.user.username.toLowerCase().startsWith(args.join(" ").toLowerCase())) || client.users.cache.get(args[0]) || message.mentions.users.first() || message.author
    
    //if we got an user by name, we must access to the user property 
    if (user.username === undefined) user = user.user
    
    data = await get(message, user)
    
    let logs = []
    
    data.logs.map((x, y) => {
      if (y < 10) logs.push(x)
    })
    
    let embed = new Discord.MessageEmbed()
    .setColor(process.env.PINK)
    .setTitle(` ${user.username} Adlı Kullanıcının Bakiyesi -> `)
    .setDescription(`${user} Şu Kadar Coin'in Var -> **__${data.coins.toFixed(2)}__**  \n\n\ `)
    .addField(` **Bakiye Log** `, logs.length == 0 ? "none" : logs.join("\n"))
    message.channel.send(embed) 
  } 
} 
