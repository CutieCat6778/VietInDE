const { Events } = require('discord.js');
const regex = /^[!@#$%^&*()-_=+[\]{};:'",.<>/?\\|]/;

module.exports = {
	name: Events.GuildMemberAdd,
	once: false,
	execute: (client, member) => {
		try {
			if (regex.test(member.displayName.toLowerCase())) {
				const newName = member.displayName.replace(regex, '');
				member.setNickname(newName);
				member.send({ content: `Your username has been replace from \`${member.displayName}\` to \`${newName.trim()}\`, in our server **${member.guild.name}** don't allow special characters in front of any user's name!`  })
			}
			member.roles.add(["1117034886675566592", "1117034990505570324", "1117035037502734336", "1109836508992634950"])
		} catch(e) {
			require("../utils/error").server(client, e);
		}
	},
};