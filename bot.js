const Discord = require('discord.js');
const client = new Discord.Client();
const broadcast = client.voice.createBroadcast();

broadcast.play('pogrzeb.mp3');

client.on('message', async message => {
    if (!message.guild) return;
  
    if (message.content === '/pogrzeb') {
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        for (const connection of client.voice.connections.values()) {
            connection.play(broadcast);
        }
      } else {
        message.reply('Nie ma cie na voice chacie');
      }
    }
  });

client.login('YOUR TOKEN');
