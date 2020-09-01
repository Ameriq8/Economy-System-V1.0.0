const BaseCommand = require("../../utils/structures/BaseCommand");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super("leaderboard", "economy", []);
  }

  async run(client, message) {
    let money = db.all().filter(data => data.ID.startsWith(`money_`)).sort((a, b) => b.data - a.data);

    money.length = 10;
    var finalLb = "";
    for (var i in money) {
      if (money[i].data === null) money[i].data = 0
      finalLb += `**${money.indexOf(money[i]) + 1}. ${bot.users.cache.get(money[i].ID.split('_')[1]) ? bot.users.cache.get(money[i].ID.split('_')[1]).tag : "Unknown User#0000"}** - ${money[i].data} Coins\n`;
    };

    const embed = new MessageEmbed()
      .setTitle(`Coins Leaderboard`)
      .setColor("GREEN")
      .setDescription(finalLb)
      .setFooter(client.user.tag, client.user.displayAvatarURL())
      .setTimestamp()
    message.channel.send(embed);
  }
};