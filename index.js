const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true});
const config = require("./botconfig.json");
const botconfig = require("./botconfig.json");
const fs = require("fs")

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
var sistem = true;

fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Hiçbir komut bulunamadı.")
        return;
    }

    jsfile.forEach((f) => {
        let props = require(`./commands/${f}`)
        console.log(`${f} yüklendi!`)
        bot.commands.set(props.help.name, props);

        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name);
        })
    })

})

bot.on("ready", async () => {
    bot.user.setActivity(`*yardım | Cure2K`)
    console.log(`-------------------------------------`);
    console.log(`${bot.user.username} şu anda aktif.`);
})

bot.on("message", async message => {

	if (message.content.toLowerCase() == 'selam' || message.content.toLowerCase() == 'slm' || message.content.toLowerCase() == 'sea' || message.content.toLowerCase() == 'sa' || message.content.toLowerCase() == 'selamlar' || message.content.toLowerCase() == 's.a' || message.content.toLowerCase() == 'selamun aleyküm') {
        try {
                return message.reply('Selam')
        } catch(err) {
          console.log(err);
        }
    }

    if(message.channel.type === "dm") return message.reply("Bota özelden yazma kapalı!");
    if(message.author.guild) return;
    if(message.author.bot) return;

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    
        if(!prefixes[message.guild.id]) {

            prefixes[message.guild.id] = {
                prefix: botconfig.prefix
            }

        }
        let prefix = prefixes[message.guild.id].prefix;


        if(!message.content.startsWith(prefix)) return;
        let args = message.content.slice(prefix.length).trim().split(/ +/g);
        let cmd;
        cmd = args.shift().toLowerCase();
        let command;
        let commandfile = bot.commands.get(cmd.slice(prefix.length));
        if(commandfile) commandfile.run(bot, message, args);

        if(bot.commands.has(cmd)) {

            command = bot.commands.get(cmd);

        } else if (bot.aliases.has(cmd)) {

            command = bot.commands.get(bot.aliases.get(cmd));

        } try {
            command.run(bot, message, args);

        } catch (e) {
            const Embed2 = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Aranılan Komut bulunamadı')
            .setDescription(`Komut çalıştırılırken bir sorun çıktı`)
            message.reply(Embed2);
            return;
        }

})

bot.login(config.token);
