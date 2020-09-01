const BaseEvent = require('../../utils/structures/BaseEvent');
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
   
  async run(client, message) {
    
    if(message.author.bot) return;
    
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
      
    let coinsadd = Math.ceil(Math.random() * 15) + 1;
    
    console.log(`${message.author.tag} get ${coinsadd} coins in ${message.guild.name}`)
    
    let bal = (await db.fetch(`money_${message.author.id}`))
    
    db.add(`money_${message.author.id}`, bal + coinsadd)
    } else {
      let coinsadd = Math.ceil(Math.random() * 30) + 12;
    
    console.log(`${message.author.tag} get ${coinsadd5} coins in ${message.guild.name}`)
    
    let bal = (await db.fetch(`money_${message.author.id}`))
    
    db.add(`money_${message.author.id}`, bal + coinsadd)
    }
  }
};