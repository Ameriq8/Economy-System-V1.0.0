const BaseEvent = require('../../utils/structures/BaseEvent');
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client, message) {
    console.log(client.user.tag + ' has logged in.');
    client.user.setActivity(`${process.env.DISCORD_BOT_PREFIX}help | Economy System`)
    
    let boostTimeOut = 21600000;
    let boost = (await db.fetch(`Coinsboost_${message.author.id}`))
    
    if (boost == null && timeout - (Date.now() - boost) > 0) {
      db.set(`Coinsboost_${message.author.id}`, false)
    }
  }
};