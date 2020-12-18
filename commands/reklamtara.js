const { RichEmbed } = require('discord.js');
const moment = require('moment');
const Discord = require('discord.js');
const client = new Discord.Client();
require('moment-duration-format');

module.exports.run = async (bot, message, args) => {try{

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);

        const members = message.guild.members.cache.filter(member => member.user.presence.game && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.presence.game.name));
        const memberss = message.guild.members.cache.filter(member => member.user.username && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.username));
        const embed = new Discord.MessageEmbed()
            .addField('Oynuyor Mesajı Reklam İçeren Kullanıcılar', members.map(member => `${member} = ${member.user.presence.game.name}`).join("\n") || "Kimsenin oynuyor mesajı reklam içermiyor.")
            .addField('Kullanıcı Adı Reklam İçeren Kullanıcılar', memberss.map(member => `${member} = ${member.user.username}`).join("\n") || "Kimsenin kullanıcı adı reklam içermiyor.")
            .setColor("RANDOM")
        message.channel.send({embed})
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
    name: "reklamtara",
    aliases: ["reklamtaramasi", "reklamtara", "reklamkontrol", "adcontrol"]
}
