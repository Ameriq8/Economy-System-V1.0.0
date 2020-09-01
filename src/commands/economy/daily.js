const BaseCommand = require("../../utils/structures/BaseCommand");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super("daily", "economy", []);
  }

  async run(client, message) {

    let timeout = 86400000;
    let amount = Math.floor(Math.random() * 800) + 200;
    let daily = await db.fetch(`daily_${user.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
      let time = ms(timeout - (Date.now() - daily));

      let timeEmbed = new MessageEmbed()
        .setColor("GREEN")
        .setDescription(`try again in **${time.hours}** hours **${time.minutes}** minutes **${time.seconds}** seconds`);
      message.channel.send(timeEmbed)
    } else {
      let embed = new MessageEmbed()
        .setColor("GREEN")
        .setDescription(`You get ${amount} coins`);
      message.channel.send(embed)

      db.add(`money_${user.id}`, amount)
      db.set(`daily_${user.id}`, Date.now())


    }
  }
};