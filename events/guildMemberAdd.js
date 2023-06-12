const { Events } = require('discord.js');
const regex = /^[!@#$%^&*()-_=+[\]{};:'",.<>/?\\|]/;

module.exports = {
	name: Events.GuildMemberAdd,
	once: false,
	execute: (client, member) => {
		if (regex.test(member.displayName)) {
			const newName = member.displayName.replace(regex, '');
			member.setNickname(newName);
            member.send({ content: `Your username has been replace from \`${member.displayName}\` to \`${newName.trim()}\`, in our server **${member.guild.name}** don't allow special characters in front of any user's name!`  })
		}
	},
};