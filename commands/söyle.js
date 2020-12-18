const Discord = require('discord.js')
const moment = require('moment')

module.exports.run = async (bot, message, args) => {try{

        message.delete();
        const soyle = args.join(" ");
        if(!soyle) {
            const Embed1 = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setDescription("Komut kullanımı: **a!söyle [istek]**")
        message.channel.send(Embed1)
        return;
        }
        const yazi = args.join(" ");
        const Embed1 = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle(soyle)
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
    name: "söyle",
    aliases: ["söyle"]
}