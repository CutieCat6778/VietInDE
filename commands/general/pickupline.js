const { SlashCommandBuilder } = require("discord.js");
const { client } = require('../../utils/error')
const wait = require('node:timers/promises').setTimeout;
const fs = require("node:fs")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("pickupline")
        .setDescription("Generate a pickup line for you!"),
    permissions: 0,
    async execute(interaction) {
        try {
            await interaction.deferReply();
            await wait(500);
            const linesRaw = fs.readFileSync("./asset/pickuplines.en.json", { encoding: "utf-8" })
            const lines = JSON.parse(linesRaw)
            const num = Math.round(Math.random() * interaction.client.usedLines.length)
            interaction.client.usedLines.splice(num, 1)
            console.log(lines[num].content, interaction.client.usedLines.length)
            await interaction.editReply({ content: lines[num].content })
        } catch(e) {
            client(interaction, e)
        }
    },
};