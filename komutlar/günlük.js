const Discord = require('discord.js')
const { get } = require('../constructors/sqlite.js')     
let cooldown = new Map();

module.exports = {
  name: "günlük",
  aliases: [""],
  description: " ",                                         
  execute: async(client, message, args, data, db) => {

    let time = Date.now(); 
    if(cooldown.get(message.author.id) > time)                
    { 
      message.channel.send(`**${message.author.tag}** Günlük Parasını zaten Aldı`); 
      return;
    }            

    
    
    db.add(`coins_${message.author.id}`, 3) 
                                                                                          
    cooldown.set(message.author.id, time + 8640000000);

    data.logs.unshift(`[+3] - Günlük Coin Aldın!`)

    message.channel.send(` **${message.author.tag}** Günlük Coin Kazandı (+3)`)
  } 
} 