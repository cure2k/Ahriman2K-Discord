const Discord = require("discord.js");
const client = new Discord.Client()
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (bot, message, args) => {try{

        const latency = msg.createdTimestamp - message.createdTimestamp;
        const Embed1 = new Discord.MessageEmbed()
            .setColor('GREEN')
            .addField('Durum', `Çalışıyor`, true)
            .addField('Gecikme', `${latency}ms`, true)
            .addField('Bellek Kullanımı', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
            .addField('Discord.JS sürüm', `v${Discord.version}`, true)
        message.channel.send(Embed1)
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
    name: "ping",
    aliases: ["ping", "p", "durum"]
}