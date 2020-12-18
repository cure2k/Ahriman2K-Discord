const Discord = require('discord.js')
const moment = require('moment')

module.exports.run = async (bot, message, args) => {try{

    const question = args.join(" ");

    if (!question) {
      return message.channel.send("Lütfen oylama için bir girdi giriniz.");
    }

    const embed = new Discord.MessageEmbed()
      .setTitle(question)
      .setColor("BLUE")
      .setDescription(`Oylamayı başlatan kişi: \`${message.author.username}\``);

    const sendMessage = await message.channel.send(embed);

    sendMessage.react("👍");
    sendMessage.react("👎");
    sendMessage.react("🤷");
    return;
    
  } catch (e) {
      const embed = new Discord.MessageEmbed()
      .setColor('BLUE')    
      .setDescription(`**Komut Çalıştırılamadı**`)
      message.channel.send(embed);
      console.log(err)
      return;
  }
}

module.exports.help = {
    name: "oylama",
    aliases: ["oylama","oyla" , "oybaslat", "oybaşlat"]
}