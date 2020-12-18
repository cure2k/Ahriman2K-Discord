const { RichEmbed } = require('discord.js');
const moment = require('moment');
const Discord = require('discord.js');
const client = new Discord.Client();
require('moment-duration-format');

module.exports.run = async (bot, message, args) => {try{

        let Girdi = message.content.split(/\s+/g).slice(1).join(" ");
        message.delete()
        if (!Girdi) {
            const embed = new Discord.MessageEmbed()
                .setAuthor(`${message.guild.name} Sunucusundaki Roller`, message.guild.iconURL())
                .setColor('BLACK')
                .setDescription(message.guild.roles.cache.sort((a, b) => a.position - b.position).map(role => role.toString()).slice(1).reverse().join("\n "));
            message.channel.send({ embed })
            return;
        }

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
    name: "rolliste",
    aliases: ["rolliste", "roller", "rolelist", "roles"]
}
