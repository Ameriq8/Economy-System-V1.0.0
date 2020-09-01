const BaseCommand = require("../../utils/structures/BaseCommand");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super("add-coins", "testing", ["add-money", "add-balance"]);
  }

  async run(client, message, args) {
    if (message.author.id !== process.env.OWNER.ID) return;
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
    if (!user) return message.channel.send("**Enter A Valid User!**")
    if (!args[1]) return message.channel.send("**Please Enter A Amount!**")
    if (isNaN(args[1])) return message.channel.send(`**❌ Your Amount Is Not A Number!**`);
    db.add(`money_${user.id}`, args[1])
    let bal = db.fetch(`money_${user.id}`)

    let moneyEmbed = new MessageEmbed()
      .setColor("GREEN")
      .setDescription(`✅ Added ${args[1]} coins to ${user}`);
    message.channel.send(moneyEmbed)

  }
};