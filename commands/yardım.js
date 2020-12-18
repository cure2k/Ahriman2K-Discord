const Discord = require('discord.js')
const moment = require('moment')

module.exports.run = async (bot, message, args) => {
    try{
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('Ahriman')
            .setURL('https://discord.gg/UaUe5ZS7VT')
            .setAuthor('Ahriman Discord Bot', 'https://images-ext-2.discordapp.net/external/XMKDDvE0Mlp_Dgtn3uVFg7bsD3G78EbZUVuPQsvm0vs/https/images-ext-2.discordapp.net/external/WWGQp5OJBJtx7EzH4ZkYdBsJD4pfJjlooqLEOasWLeY/%253Fsize%253D1024/https/cdn.discordapp.com/avatars/701529204101087252/6773f0db375057c81ddc6482d76af5d6.webp', 'https://discord.gg/UaUe5ZS7VT')
            .setDescription('Ahriman, sizin günlük işlerinizi görmeniz için tasarlanmış bir discord botudur.')
            .setThumbnail('https://images-ext-2.discordapp.net/external/XMKDDvE0Mlp_Dgtn3uVFg7bsD3G78EbZUVuPQsvm0vs/https/images-ext-2.discordapp.net/external/WWGQp5OJBJtx7EzH4ZkYdBsJD4pfJjlooqLEOasWLeY/%253Fsize%253D1024/https/cdn.discordapp.com/avatars/701529204101087252/6773f0db375057c81ddc6482d76af5d6.webp')
            .addFields(
                { name: 'Konu Dışı', value: 'Günlük hayatınızda kullanabileceğiniz, işe yarar komutlar.\n \`*avatar\` \`*çaysöyle\` \`*davet\` \`*oylama\` \`*öp\` \`*wiki\`'},
                { name: 'Dini', value: 'Dini komutlardır. Dini inançlar için kullanışlı şeyler sunar.\n \`*ayetler\`'},
                { name: 'Bot Komutları', value: 'Botun kendi içerisinde kullanılabilecek komutlarıdır. Sunucular için geneldir.\n \`*yardım\` \`*prefix\` \`*ping\`'},
                { name: 'Moderasyon', value: 'Sunucu içerisindeki yetkililerin kullanabileceği moderasyon komutlarıdır. Yetkililere kolaylık sunar.\n \`*ban\` \`*bankaldir\` \`*kullanicibilgi\` \`*reklamtaramasi\` \`*rolliste\` \`*rolver\` \`*temizle\` \`*yavasmod\`'},
                )
            .setTimestamp()
            .setFooter('Ahriman Discord Bot', 'https://images-ext-2.discordapp.net/external/XMKDDvE0Mlp_Dgtn3uVFg7bsD3G78EbZUVuPQsvm0vs/https/images-ext-2.discordapp.net/external/WWGQp5OJBJtx7EzH4ZkYdBsJD4pfJjlooqLEOasWLeY/%253Fsize%253D1024/https/cdn.discordapp.com/avatars/701529204101087252/6773f0db375057c81ddc6482d76af5d6.webp');

        message.channel.send(exampleEmbed);
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
    name: "yardım",
    aliases: ["yardım", "help"]
}
