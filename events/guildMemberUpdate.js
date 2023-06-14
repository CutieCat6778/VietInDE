const { Events } = require('discord.js');
const regex = /^[!@#$%^&*()-_=+[\]{};:'",.<>/?\\|]/;

module.exports = {
	name: Events.GuildMemberUpdate,
	once: false,
	execute: (client, oldMember, newMember) => {
    console.log(newMember.displayName, "Member update")
		if (regex.test(newMember.displayName.toLowerCase())) {
			const newName = newMember.displayName.replace(regex, '');
			newMember.setNickname(newName);
      newMember.send({ content: `Your username has been replace from \`${newMember.displayName}\` to \`${newName.trim()}\`, in our server **${newMember.guild.name}** don't allow special characters in front of any user's name!`  })
		}
	},
};