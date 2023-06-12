const { Events } = require("discord.js")
const regex = /^[!@#$%^&*()-_=+[\]{};:'",.<>/?\\|]/;

module.exports = {
    name: Events.GuildMemberAdd,
    once: true,
    execute: (client, member) => {
        if(regex.test(member.displayName)) {
            const newName = member.displayName.replace(regex, '');
            member.setNickname(newName)
        }
    }
}