const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {try{

    const kisi = message.content.split(/\s+/g).slice(1).join(" ");

    // GIF LISTESI
	var opme_gif = ["https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif",
	"https://thumbs.gfycat.com/FalseFarawayClam-small.gif", 
	"https://i.pinimg.com/originals/17/1b/1e/171b1ea1eaf89980a6ef6a805e19c5b1.gif",
	"https://64.media.tumblr.com/56614f2adbcecd04ab527ce1a067f297/tumblr_mn64lwbR0w1rsbc8eo1_500.gif",
	"https://cutewallpaper.org/21/kiss-anime-couple/Anime-Kiss-GIFs-Tenor.gif", 
	"https://i.pinimg.com/originals/15/de/13/15de13de70d9a7ceebe2cf9191e02ad1.gif", 
	"https://thumbs.gfycat.com/KeyImpureAtlasmoth-max-1mb.gif", 
	"https://d.wattpad.com/story_parts/165251837/images/14329533c338bf82.gif", 
	"https://66.media.tumblr.com/f77e7647f92dd8c1d52906eee68808b9/tumblr_oygbfrZI4U1v99polo1_500.gif"]
	
	var randomGif= opme_gif[Math.floor(Math.random() * opme_gif.length)];

        if (!kisi) {
            const Kullanim1 = new Discord.MessageEmbed()
                .setColor('RED')
                .setDescription('Öpecek adam bulamadın dimi yıkık.')
            message.channel.send(Kullanim1)
        } else if (message.mentions.users.first() === message.author) {
            const Kullanim2 = new Discord.MessageEmbed()
                .setColor('#FFC0CB')
                .setDescription('( ͠❛ ⏥ ͡❛) ? Kendine mi aşıksın lan!')
            message.channel.send(Kullanim2)
        } else if (message.mentions.users.first().id === '701529204101087252') {
            const Kullanim3 = new Discord.MessageEmbed()
                .setColor('#FFC0CB')
                .setDescription('Beni mi öptün sen... ( ❛︠ ᆽ ︡❛)')
				.setFooter(`( ❛︠ ● ︡❛) | ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true, size: 512 })}`)
                .setImage('https://media1.tenor.com/images/0cca08a1809076586c912020062f2d6c/tenor.gif?itemid=15974488')
            message.channel.send(Kullanim3)
        } else {
            const Kullanim4 = new Discord.MessageEmbed()
                .setColor('BLACK')
				.setFooter(`( ❛︠ ● ︡❛) | ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true, size: 512 })}`)
                .setDescription(`**${kisi}, ${message.author} tarafından öpüldü!**`)
                .setImage(randomGif)
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
    name: "öp",
    aliases: ["öp"]
}
