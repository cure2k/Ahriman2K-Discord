const Discord = require("discord.js");
const fs = require("fs")
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {try {

        let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
        if(!prefixes[message.guild.id]) {
            prefixes[message.guild.id] = {
                prefix: botconfig.prefix
            }
        }
        let prefix = prefixes[message.guild.id].prefix;

        const Embed1 = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('Yetki Yetersiz')
        .setDescription(`Bu komutu kullanabilmek için "Sunucuyu Yönet" yetkin olmalı.`)

        const Embed2 = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Yanlış komut kullanımı')
        .setDescription(`Geçerli bir prefix girilmedi\n**Komut Kullanımı**: a!prefix [istediğiniz_prefix]`)


        if(!message.member.guild.me.hasPermission("MANAGE_GUILD")) {
            const Embed1 = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('Yetki Yetersiz')
            .setDescription(`Bu komutu kullanabilmek için "Sunucuyu Yönet" yetkim olmalı.`)
            message.reply(Embed1);
            return;
        }
        if(!message.member.hasPermission("MANAGE_GUILD")) {
            const Embed1 = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('Yetki Yetersiz')
            .setDescription(`Bu komutu kullanabilmek için "Sunucuyu Yönet" yetkin olmalı.`)
            message.reply(Embed1);
            return;
        }
        if(!args[0]) {
            const Embed2 = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Yanlış komut kullanımı')
            .setDescription(`Geçerli bir prefix girilmedi\n**Komut Kullanımı**: a!prefix [istediğiniz_prefix]`)
            message.reply(Embed2);
            return;
        }

        prefixes[message.guild.id] = {
            prefix: args[0]
        }

        fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) =>{
            if (err) console.log(err);
        });

        const Embed3 = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('Prefix değiştirme başarılı')
            .setDescription(`Şu anki prefix: ${args[0]}`)
            .addField('Değiştiren kişi', message.author.username)
        
        message.channel.send(Embed3)
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
    name: "prefix",
    aliases: ["prefix", "prfx"]
}