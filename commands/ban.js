const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {try {

        const Kullanim1 = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Yetki yetersiz.')
        .setDescription('a!ban <@kullanıcı> <sebep>')
        .addFields(
            { name: '-Hata-', value: 'Botun yetkisi yetersiz.'},
        )

        const Kullanim2 = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Komut Yanlış Yazıldı')
        .setDescription('a!ban <@kullanıcı> <sebep>')
        .addFields(
            { name: 'Kullanım Şartları', value: 'Bu botu kullanmak için "Üyeleri Yasakla" yetkisine sahip olmalısın.'},
        )

        const Kullanim3 = new Discord.MessageEmbed()
            .setColor('YELLOW')
            .setTitle('Bir kullanıcı giriniz.')
            .setDescription('a!ban <@kullanıcı> <sebep>')

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(Kullanim2)
        let User = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
        if (!User) return message.channel.send(Kullanim3)
        if (User.hasPermission("BAN_MEMBERS")) return message.reply("Moderatörü banlayamazsın.")
        let banReason = args.join(" ").slice(22);
        if (!banReason) {
            banReason = "Belirtilmedi."
        }
        User.ban({reason: banReason})

        const Embed1 = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('Banlama başarılı.')
            .addField('Banlanan', User)
            .addField(`Banlayan`, message.author.username)
            .addField('Sebebi', banReason)
        
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
    name: "ban",
    aliases: ["ban", "engelle", "banla"]
}