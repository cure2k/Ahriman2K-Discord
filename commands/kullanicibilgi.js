const Discord = require('discord.js')
const moment = require('moment')

const flags = {
	DISCORD_EMPLOYEE: 'Discord Çalışanı',
	DISCORD_PARTNER: 'Discord Partneri',
	BUGHUNTER_LEVEL_1: 'Bug Hunter (Seviye 1)',
	BUGHUNTER_LEVEL_2: 'Bug Hunter (Seviye 2)',
	HYPESQUAD_EVENTS: 'HypeSquad Etkinlikleri',
	HOUSE_BRAVERY: 'HypeSquad Bravery',
	HOUSE_BRILLIANCE: 'HypeSquad Brilliance',
	HOUSE_BALANCE: 'HypeSquad Balance',
	EARLY_SUPPORTER: 'Erken Destekçi',
	TEAM_USER: 'Takım Kullanıcısı',
	SYSTEM: 'Sistem',
	VERIFIED_BOT: 'Onaylanmış Bot',
	VERIFIED_DEVELOPER: 'Onaylanmış Bot Geliştiricisi'
};

module.exports.run = async (bot, message, args) => {try{

  		const member = message.mentions.members.last() || message.guild.members.cache.get(args[0]) || message.member;
		const roles = member.roles.cache
			.sort((a, b) => b.position - a.position)
			.map(role => role.toString())
			.slice(0, -1);
		const userFlags = member.user.flags.toArray();
		const embed = new Discord.MessageEmbed()
			.setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
			.setColor(member.displayHexColor || member.roles.hoist.displayHexColor || "BLUE")
			.setAuthor(member.user.username + ' Kullanıcısının Bilgileri')
			.addField(`\u200b`, [
				`**Kullanıcı adı:** \`${member.user.username}\``,
				`**Etiketi:** \`${member.user.discriminator}\``,
				`**ID:** \`${member.id}\``,
				`**Rozetleri:** \`${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'Bulunamadı'}\``,
				`**Avatar:** [Avatar Bağlantısı](${member.user.displayAvatarURL({ dynamic: true })})`,
				`**Hesabın Açılma Zamanı:** \`${moment(member.user.createdTimestamp).locale('tr').format('LT')} ${moment(member.user.createdTimestamp).locale('tr').format('LL')} / ${moment(member.user.createdTimestamp).locale('tr').fromNow()}\``,
				`\u200b`
			])
			.addField('Sunucu İle İlgili', [
				`**❯ Sunucuya Giriş Zamanı:** \`${moment(member.joinedAt).locale('tr').format('LL LTS')}\``,
				`**❯ Gözüken Rol:** \`${member.roles.hoist ? member.roles.hoist.name : 'Bulunamadı'}\``,
				`**❯ Tüm Rolleri [${roles.length}]:** ${roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'Bulunamadı'}`,
				`\u200b`
			]);

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
    name: "kullanicibilgi",
    aliases: ["userinfo", "kullanicibilgi", "kullanici"]
}