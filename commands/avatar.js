const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {try{

        let member = message.mentions.users.first() || args[0] || message.author;
        let avatar = member.displayAvatarURL({size: 1024, dynamic: true, format: "webp"})
        let avatarF3 = member.displayAvatarURL({size: 1024, dynamic: false, format: "webp"})
        let avatarF1 = member.displayAvatarURL({size: 1024, dynamic: false, format: "png"})
        let avatarF2 = member.displayAvatarURL({size: 1024, dynamic: true, format: "gif"})
        const avatarEmbed = new Discord.MessageEmbed()
            .setTitle(`${member.username} adlı kullanıcının avatarı`)
            .setDescription(`\`UserID:\` [${member.id}](${"https://discord.com/users/" + member.id}) \n\u200b\n \`Formatlar:\` [WEBP](${avatarF3}) | [PNG](${avatarF1}) | [GIF](${avatarF2})`)
            .setImage(avatar)
            .setColor("BLACK")
        message.channel.send(avatarEmbed);
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
    name: "avatar",
    aliases: ["avatar", "profile", "profil"]
}