const { RichEmbed } = require('discord.js');
const moment = require('moment');
const Discord = require('discord.js');
const client = new Discord.Client();
require('moment-duration-format');

module.exports.run = async (bot, message, args) => {try{
    
        var verti = message.guild.verificationLevel;

        const vertific = ['Yok', 'Düşuk', 'Orta', 'Yüksek', 'En Yüksek'];

        let region = {
                    "us-central": "Amerika :flag_us:",
                    "us-east": "Doğu Amerika :flag_us:",
                    "us-south": "Güney Amerika :flag_us:",
                    "us-west": "Batı Amerika :flag_us:",
                    "eu-west": "Batı Avrupa :flag_eu:",
                    "eu-central": "Avrupa :flag_eu:",
                    "singapore": "Singapur :flag_sg:",
                    "london": "Londra :flag_gb:",
                    "japan": "Japonya :flag_jp:",
                    "russia": "Rusya :flag_ru:",
                    "hongkong": "Hong Kong :flag_hk:",
                    "brazil": "Brezilya :flag_br:",
                    "singapore": "Singapur :flag_sg:",
                    "sydney": "Sidney :flag_au:",
                    "southafrica": "Güney Afrika :flag_za:"
        }

        let kur = {
                    "01": "Ocak",
                    "02": "Şubat",
                    "03": "Mart",
                    "04": "Nisan",
                    "05": "Mayıs",
                    "06": "Haziran",
                    "07": "Temmuz",
                    "08": "Ağustos",
                    "09": "Eylül",
                    "10": "Ekim",
                    "11": "Kasım",
                    "12": "Aralık"
        }
         
     
 
        const embed = new Discord.MessageEmbed()
            .setAuthor(`${message.guild.name} | Sunucunun Bilgileri`)
            .addField('Sunucu Kurucusu', `${message.guild.owner}`)
            .addField('Sunucu ID', message.guild.id)
            .addField('Oluşturulma Tarihi', `${moment(message.guild.createdAt).locale('tr').format('DD')} ${kur[moment(message.guild.createdAt).locale('tr').format('MM')]} ${moment(message.guild.createdAt).locale('tr').format('YYYY h:mm:ss')}`)
            .addField('Sunucu Kurulum Konumu', region[message.guild.region])
            .addField(`Kanallar`, `${message.guild.channels.cache.filter(c => c.type === "text").size} Yazı  \n${message.guild.channels.cache.filter(c => c.type === "voice").size} Ses \n${message.guild.channels.cache.filter(c => c.type === 'category').size} Kategori`)
            .addField('AFK Kanalı', message.guild.afkChannel || 'Bulunmuyor')
            .addField('AFK Zaman Aşımı', `${message.guild.afkTimeout} Saniye`)
            .setThumbnail(message.guild.iconURL())
            .setColor('BLACK')
            .setTimestamp()
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
    name: "sunucubilgi",
    aliases: ["svbilgi", "serverinfo", "sunucubilgi", "swinfo", "svinfo", "sunucuhakkinda"]
}
