const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready' , () =>{
 console.log('ready!');
 client.user.setStatus('dnd');
});

client.on('message', async message => {
    if (!message.guild) return;
    if (message.content === '/pogrzeb') {
        console.log(`pogrzeb sie zaczal`);
      if (message.member.voice.channel) {

message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play("pogrzeb.mp3").on("finish", () => VoiceConnection.disconnect());
        message.reply("odprawianie...");
    }).catch(e => console.log(e))
} else {
        message.reply('Nie ma cie na voice chacie');
      }
    }



    if (message.content === '/stop') {

      for (const connection of client.voice.connections.values()) {
        connection.disconnect();
    }
      console.log(`pogrzeb sie zakonczyl`);     
      }

if (message.content === '/pomoc') {

        message.reply("/pogrzeb - odprawia pogrzeb");
	message.reply("/stop - konczy pogrzeb");
  message.reply("/pingu - ping sprawdza w ms");
	message.reply("https://cdn.discordapp.com/avatars/790380203296948224/96b25cdbb57b54fb52befca60fe3edfb.webp?size=1024");


      console.log(`ktos pomocy szuka`);  

}

if (message.content === '/pingu') {
    
  var ping = Date.now() - message.createdTimestamp + " ms";
  message.reply("Twoj ping to `" + `${Date.now() - message.createdTimestamp}` + " ms`");

}

  });

client.login('TOKEN'); // your token
