const BaseCommand = require("../../utils/structures/BaseCommand");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super("buy", "economy", []);
  }

  async run(client, message, args) {
    let user = message.author
    let author = db.fetch(`money_${user.id}`)
    let boost = (await db.fetch(`Coinsboost_${user.id}`));
    
    let Embed = new MessageEmbed()
      .setColor("RED")
      .setDescription(`You need 200 coins to buy Coins Boost`);

    if (args.join(' ').toLocaleLowerCase() == 'coins boost') {
      if (author < 5000) return message.channel.send(Embed)
      if (boost == true) return message.channel.send(`You can't buy boost, Because you have boost. If you want to know when it will expire type this ${process.env.DISCORD_BOT_PREFIX}boost`);
      
      message.channel.send("Done, now you have coins boost for **6**hours")
      
      await db.fetch(`Coinsboost_${user.id}`);
      db.set(`Coinsboost_${user.id}`, true)
    } else {
      if (message.content.toLowerCase() === `${process.env.DISCORD_BOT_PREFIX}buy`) {
        let ro = new MessageEmbed()
          .setColor("RED")
          .setDescription(`nter An Item To Buy!\nType ${process.env.DISCORD_BOT_PREFIX}store To See List Of Items!`)
        return message.channel.send(ro)
      }
    }
  }
};