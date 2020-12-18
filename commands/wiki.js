const Discord = require('discord.js')
const moment = require('moment')
const wiki = require("wikijs").default();

module.exports.run = async (bot, message, args) => {

    if (!args[0]) {
      return message.channel.send("Lütfen aranacak bir girdi giriniz.");
    }

    const search = await wiki.search(args.join(" "));

    if (!search.results[0]) {
      return message.channel.send("Sonuç bulunamadı...");
    }

    const result = await wiki.page(search.results[0]);
    const description = await result.summary();
    const title = result.raw.title;
    const url = result.raw.fullurl;

    const embed = new Discord.MessageEmbed()
      .setTitle(`${title} (Okumaya Devam Et)`)
      .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/7/75/Wikipedia_mobile_app_logo.png")
      .setURL(url)
      .setColor("BLUE")
      .setDescription(
        `${description.slice(0, 2045)}${description.length > 2048 ? "..." : ""}`
      );

    message.channel.send(embed);
    
}

module.exports.help = {
    name: "wiki",
    aliases: ["wiki"]
}