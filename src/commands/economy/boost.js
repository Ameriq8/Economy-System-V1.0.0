const BaseCommand = require("../../utils/structures/BaseCommand");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super("boost", "economy", []);
  }

  async run(client, message) {
    let boostTimeOut = 21600000
    let boost = (await db.fetch(`Coinsboost_${message.author.id}`))
    if (boost !== null && boostTimeOut - (Date.now() - boost) > 0) {
    let time = ms(timeout - (Date.now() - boost));
    
    message.channel.send(`Your boost end at **${time.hours}**hours **${time.minutes}**minutes **${time.seconds}**seconds`);
    } else {
      message.channel.send("You don't have boost")
    };
  }
};
