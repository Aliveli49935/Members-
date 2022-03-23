const Discord = require('discord.js')
const config = require('../config.json')
module.exports = {
  execute: async(client, db) => {
   
    console.log(`${client.user.tag} Ready bruh`)
 
    client.user.setActivity(`Asreaper Bot Aktif | !yardım | !bul `, { type: "WATCHING" }) 
    
  } 
}