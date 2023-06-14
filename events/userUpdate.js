const { Events } = require("discord.js");
const regex = /^[!@#$%^&*()-_=+[\]{};:'",.<>/?\\|]/;

module.exports = {
    name: Events.UserUpdate,
    once: false,
    execute: async (client, oldUser, newUser) => {
        try {
            const guild = await client.guilds.fetch("1109824252334592051");
            const member = await guild.fetch(newUser.id);
            console.log(member.displayName, "User update");
            if (regex.test(member.displayName.toLowerCase())) {
                const newName = member.displayName.replace(regex, "");
                member.setNickname(newName);
                member.send({
                    content: `Your username has been replace from \`${
                        member.displayName
                    }\` to \`${newName.trim()}\`, in our server **${
                        member.guild.name
                    }** don't allow special characters in front of any user's name!`,
                });
            }
        } catch (e) {
            require("../utils/error").server(client, e);
        }
    },
};
