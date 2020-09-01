const BaseCommand = require("../../utils/structures/BaseCommand");
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super("evel", "testing", ["top-server"]);
  }

  async run(client, message) {

    
            if (message.author.id !== process.env.OWNER.ID) return;
        try {
            const com = eval(message.content.split(" ").slice(1).join(" "));
            message.channel.send('```\n' + com + '```');
        } catch (e) {
            message.channel.send('```javascript\n' + e + '```');
        }
  }
};