const { SlashCommandBuilder } = require("discord.js");
const regex = /^[!@#$%^&*()-_=+[\]{};:'",.<>/?\\|]/;

module.exports = {
    data: new SlashCommandBuilder()
        .setName("removehoisting")
        .setDescription("It is a admin command, don't touch it!")
        .addMentionableOption((option) =>
            option
                .setName("target")
                .setDescription("Remove the hoisting of a user!")
                .setRequired(true)
        ),
    permissions: 8,
    async execute(interaction) {
        await interaction.deferReply();
        const target = await interaction.options.getUser("target");
        const member = await interaction.guild.members.fetch(target.id)
        let newName = "";
        if (regex.test(member.displayName)) {
            newName = member.displayName.replace(regex, "");
            member.setNickname(newName);
        }
        console.log(member)
        await interaction.editReply(
            `Changed the username of ${member.displayName} to ${newName}`
        );
    },
};
