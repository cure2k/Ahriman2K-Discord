const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {try{

    const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            message.reply('Lütfen geçerli bir değer gir.');
            return;
        } else if (amount <= 1 || amount > 101) {
            message.reply('1 ile 100 Mesaj aralığında bir sayı girmelisin.');
            return;
        }

        message.channel.bulkDelete(amount, true).then(deletedMessages => {
            var botMessages = deletedMessages.filter(m => m.author.bot);
            var userPins = deletedMessages.filter(m => m.pinned);
            var userMessages = deletedMessages.filter(m => !m.author.bot);

            const embed = new Discord.MessageEmbed()
                .setTitle("Başarılı")
                .setColor("BLACK")
                .addField("Silinen Bot Mesajı", botMessages.size, false)
                .addField("Silinen Pinli Mesaj", userPins.size, false)
                .addField("Toplam Silinen Kullanıcı Mesajı", userMessages.size, false)
                .addField("Toplam Silinen Mesaj", deletedMessages.size, false);

            message.channel.send(embed);

        }).catch(err => {
            console.error(err);
            message.channel.send('Mesajlar silinirken hata ile karşılaşıldı!');
        });
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
    name: "sil",
    aliases: ["purge", "sil", "temizle"]
}