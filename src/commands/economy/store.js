const BaseCommand = require("../../utils/structures/BaseCommand");
const { MessageEmbed } = require("discord.js");
module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super("store", "economy", ["shop"]);
  }

  async run(client, message) {
    
    let embed = new MessageEmbed()
          .setTitle("Store")
          .addField("Coins Boost", "`You can boost you coins and get x2 coins for 6h\nprice: 5000`")
          .addField("More", "New items will add in store soon");
        message.channel.send(embed);
        
  }
};
