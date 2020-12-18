const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {try{

    const kisi = message.content.split(/\s+/g).slice(1).join(" ");
        var cayci_gif = "https://www.neoldu.com/d/other/cay-002.gif"

        if (!kisi) {
            const Kullanim1 = new Discord.MessageEmbed()
                .setColor('RED')
                .setDescription('Çay ısmarlayacak adam yoksa ben varım abi :)')
            message.channel.send(Kullanim1)
        } else if (message.mentions.users.first() === message.author) {
            const Kullanim2 = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setDescription('Abi oradan bir tane daha çek abime!')
                .setImage(cayci_gif)
            message.channel.send(Kullanim2)
        } else if (message.mentions.users.first().id === '701529204101087252') {
            const Kullanim3 = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setDescription('Off, bana çay ısmarlayan adam çıktı beleşşşş ( ❛︠ ᆽ ︡❛)')
                .setImage(cayci_gif)
            message.channel.send(Kullanim3)
        } else {
            const Kullanim4 = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setDescription(`${message.author}, ${kisi} kullanıcısına çay ısmarladı!`)
                .addField(`Abi oradan bi çay çek, kaçak olsun.`, `:sparkles:`)
                .setImage(cayci_gif)
            message.channel.send(Kullanim4)
        }
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
    name: "caysöyle",
    aliases: ["çaysöyle", "çayçek", "çay", "çayver"]
}