const Discord = require('discord.js')
const moment = require('moment')

module.exports.run = async (bot, message, args) => {try{

		const embed = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setDescription(`\`Bot Davet Bağlantısı:\` [TIKLA](https://discord.com/api/oauth2/authorize?client_id=701529204101087252&permissions=8&scope=bot)\n\u200b\n\`Github:\` [Eklenecek]`)
        message.channel.send(embed);
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
    name: "davet",
    aliases: ["davet", "botçek", "botdavet"]
}