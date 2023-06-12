const { Events } = require("discord.js");

module.exports = {
  name: Events.InteractionCreate,
  once: false,
  execute: async (client, interaction) => {
    try {
      if (!interaction.isChatInputCommand()) return;

      const command = interaction.client.commands.get(interaction.commandName);

      if (!command) {
        new Error(`Command with name ${interaction.commandName} not found!`);
        return;
      }

      if (!interaction.member.permissions.has(command.permissions)) {
        interaction.reply({
          content: "You don't have permission to use this command!",
        });
        return;
      }

      await command.execute(interaction);
    } catch (error) {
      require('../utils/error').client(interaction, error);
    }
  },
};
