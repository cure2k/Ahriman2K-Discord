const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (bot, message, args) => {try {

		if (!message.member.guild.me.hasPermission("MANAGE_ROLES")) {
			const Embed1 = new Discord.MessageEmbed()
			.setDescription('Bu komutu kullanmak için botun **Rolleri Yönet** yetkisine sahip olmalısı gerek.')
			.setAuthor(`${message.author.username} Yetkin yetersiz.`, message.author.displayAvatarURL)
			.setColor("BLUE");
			message.reply(Embed1);
			return;
		}
		if (!message.member.hasPermission("MANAGE_ROLES")) {
			const Embed1 = new Discord.MessageEmbed()
			.setDescription('Bu komutu kullanmak için **Rolleri Yönet** yetkisine sahip olmalısın.')
			.setAuthor(`${message.author.username} Yetkin yetersiz.`)
			.setColor("BLUE");
			message.reply(Embed1);
			return;
		}

		let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
		
		if (!rMember) {
			const Embed2 = new Discord.MessageEmbed()
			.setDescription(`Lütfen bir kullanıcı ismi gir.\nÖrnek: a!rolver @İsim @Verilecek rol`)
			.setColor("BLUE")
			.setAuthor(`${message.author.username}, komutu yanlış girdin`)
			message.reply(Embed2);
			return;
		}
		
		let role = message.mentions.roles.first()
		
		if (!role){ 
			const Embed3 = new Discord.MessageEmbed()
			.setDescription(`Lütfen bir rol girin\nÖrnek: a!rolver @İsim @Verilecek rol`)
			.setColor("BLUE")
			.setAuthor(`${message.author.username}, rol girilmedi`)
			message.reply(Embed3);
			return;
		}
		
		let aRole = message.mentions.roles.first()
		
		if (!aRole) { 
			const Embed4 = new Discord.MessageEmbed()
			.setDescription(`Girilen rol bulunamadı.\nÖrnek: a!rolver @İsim @Verilecek rol`)
			.setColor("BLUE")
			.setAuthor(`${message.author.username}, Rolü bulamadım :(`)
			message.reply(Embed4);
			return;
		}
		message.member.guild.me.has
		
		if (message.member.roles.cache.has(aRole.id)) {
			const Embed5 = new Discord.MessageEmbed()
			.setTitle('Bu kullanıcı zaten bu rolde.')
			.setColor("BLUE");
			message.reply(Embed5);
			return;
		}
		await (rMember.roles.add(aRole.id))
		
		const Embed6 = new Discord.MessageEmbed()
			.setDescription(`${rMember} isimli üyeye \`${role.name}\` isimli yetki başarıyla verildi! ✅`)
			.setColor("BLUE");
		message.reply(Embed6);
		return;

	} catch (e) {
		const Embed31 = new Discord.MessageEmbed()
		.setDescription(`Komut çalıştırılırken sorun yaşandı. Büyük ihtimalle, botun yetkileri rol vermeye yetersiz.`)
		.setColor("BLUE");
		message.reply(Embed31);
		console.log(e)
		return;
	}
}

module.exports.help = {
	name: "rolver",
	aliases: ["rolver", "kayit", "kayitet", "kaydet", "kayıtet"]
}
