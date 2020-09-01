const BaseCommand = require("../../utils/structures/BaseCommand");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super("balance", "testing", []);
  }

  async run(client, message, args) {

    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        r =>
        r.user.username.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        r => r.displayName.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.author;

    let bal = (await db.fetch(`money_${user.id}`)) || 0;

    if (user) {

      let moneyEmbed = new MessageEmbed()
        .setColor("GREEN")
        .setDescription(
          `${user.tag}, have ${bal}`
        );

      message.channel.send(moneyEmbed);


    } else {
      return message.channel.send("**I Can't find this user!**");
    }

  }
  
};