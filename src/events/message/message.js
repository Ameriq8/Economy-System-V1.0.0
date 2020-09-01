const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {
    if (message.author.bot) return;
    if (message.content.startsWith(client.prefix)) {

      
      const [cmdName, ...cmdArgs] = message.content.slice(client.prefix.length).trim().split(/\s+/);
      const command = client.commands.get(cmdName);
      const sss = message.content.split(' ').slice(1).join(' ');
      


      if (command) {
//         const Discord = require('discord.js')
//         let cooldowns = new Discord.Collection();

//           const now = Date.now(); //now...
//             const timestamps = cooldowns.get(command.name); //...we take the command cooldown...
//             const cooldownAmount = (command.cooldown || 3) * 1000; //...multiply with 1000 (ms), if no command cooldown, default 3 seconds

//             if (timestamps.has(message.author.id)) { //if cooldown...
//                 const expirationTime = timestamps.get(message.author.id) + cooldownAmount; //...take time...

//                 if (now < expirationTime) {
//                     const timeLeft = (expirationTime - now) / 1000;
//                     return message.channel.send(`🚫 **${message.author.username}**, calm down 😓! **${timeLeft.toFixed(2)}** second(s) left.`).then(m => { //return
//                         m.delete(3500); //delete message after 3.5 seconds
//                     })
//                 }
//             }

//             timestamps.set(message.author.id, now); //set cooldown, if user has no cooldown
//             setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);



        command.run(client, message, cmdArgs, sss);
      }}}}