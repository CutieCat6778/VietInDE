const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("avatar")
        .setDescription("It is a slash commands to get avatar of a user!")
        .addMentionableOption((option) =>
            option
                .setName("target")
                .setDescription("Remove the hoisting of a user!")
                .setRequired(true)
        ),
    permissions: 0,
    async execute(interaction) {
        try {
            await interaction.deferReply();
            const target = interaction.options.getUser("target");
            const user = await interaction.guild.members.fetch(target.id)
            await interaction.editReply(user.displayAvatarURL({ size: 1024, extension: "png" }))
        } catch(e) {
            require("../../utils/error").client(interaction, e)
        }
    },
};
