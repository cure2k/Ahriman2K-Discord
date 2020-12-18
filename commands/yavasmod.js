const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {try{
    
        const { channel } = message
        let sure = args.join('')
        if (sure === 'kapat') {
            sure = 0
            channel.setRateLimitPerUser(sure)
            const hataEmbed = new Discord.MessageEmbed()
                    .setColor('Green')
                    .setTitle("✅ Slowmode kapatıldı.")
            message.channel.send(hataEmbed)
            return
        }

        if (sure === '0') {
            sure = 0
            channel.setRateLimitPerUser(sure)
            const hataEmbed = new Discord.MessageEmbed()
                    .setColor('Green')
                    .setTitle("✅ Slowmode kapatıldı.")
            message.channel.send(hataEmbed)
            return
        }

        if (isNaN(sure) || !sure){
            const hataEmbed = new Discord.MessageEmbed()
                    .setColor('RED')
                    .setTitle('⛔️ Lütfen geçerli bir zaman seçeneği giriniz')
            message.channel.send(hataEmbed)
            return
        }

        channel.setRateLimitPerUser(sure)
        const Embed = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .addField(`✅ Yavaş mod ayarlandı.`, `Ayarlanan süre: ${sure} saniye`)
        message.channel.send(Embed)
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
    name: "yavasmod",
    aliases: ["slowmode", "yavasmod", "yavasmode"]
}