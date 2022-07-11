const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require("./config.json");



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus("dnd");
});
client.on('messageCreate', message => {


  



if (message.content === `${config.prefix}stop`) {

  for (const connection of client.voice.connections.values()) {
    connection.disconnect();
}
  console.log(`pogrzeb sie zakonczyl`);     
  }



if (message.content === `${config.prefix}pomoc`) {

  message.channel.send("/pogrzeb - odprawia pogrzeb");
  message.channel.send("/stop - konczy pogrzeb");
  message.channel.send("/pingu - ping sprawdza w ms");
  message.channel.send("https://cdn.discordapp.com/avatars/790380203296948224/96b25cdbb57b54fb52befca60fe3edfb.webp?size=1024");


console.log(`ktos pomocy szuka`);  

}


  if (message.content === `${config.prefix}ping`) {
    var ping = Date.now() - message.createdTimestamp + " ms";
    message.channel.send("ping:`" + `${Date.now() - message.createdTimestamp}` + " ms`");
    message.channel.send('pong');
  }
});


client.login(config.token);
