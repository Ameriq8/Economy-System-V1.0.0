const { Client, MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

const { registerCommands, registerEvents } = require("./utils/registry");
const client = new Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

