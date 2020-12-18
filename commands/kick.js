const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {try{

        const Kullanim1 = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Komut Yanlış Yazıldı')
            .setDescription('a!kick <@kullanıcı> <sebep>')
            .addFields(
                { name: 'Kullanım Şartları', value: 'Bu botu kullanmak için "Üyeleri At" yetkisine sahip olmalısın.'},
            )
        
        const Kullanim2 = new Discord.MessageEmbed()
            .setColor('YELLOW')
            .setTitle('Bir kullanıcı giriniz.')
            .setDescription('a!kick <@kullanıcı> <sebep>')
        
        if (!message.member.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(Kullanim1);
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(Kullanim1)
        let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        let reason = args.join(" ").slice(22);
        if (message.mentions.users.size < 1) return message.channel.send(Kullanim2);
        if (user.id === message.author.id) return message.reply('Kendini mi atacaksın? Ciddi misin?');
        if (!reason) {
            reason = "Belirtilmedi."
        }
        message.guild.member(user).kick({
            reason: reason
        });
        const atildi = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('Kullanıcı atıldı.')
            .addField('Atılan', user)
            .addField('Sebebi', reason)
        
        message.channel.send(atildi)
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
    name: "kick",
    aliases: ["at", "kick"]
}