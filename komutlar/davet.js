const Discord = require('discord.js') 
const { RichEmbed } = require("discord.js");
const config = require('../config.json')
module.exports = {
  name: "davet", 
  aliases: ["invite"],
  description: "",
  execute: async(client, message, args, data, db) => {
   
    let embed = new RichEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL()) 
    .setThumbnail(client.user.avatarURL()) 
    .addField('Botu Sunucuna Davet Et ',`Members [Bot Link](https://discord.com/oauth2/authorize?client_id=764778934482763776&scope=bot&permissions=8)`)    
    .setFooter(`${client.user.username} bot`) 
    .setColor(config.embedColor)
 
    message.channel.send(embed)
      
    
  } 
} 
