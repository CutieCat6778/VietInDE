module.export = {
    client: async (interaction, error) => {
        console.error(error)
        interaction.reply({ embeds: [{
            title: "There is an error!",
            description: "Please try again later, there is an error happening. I'm trying my best to fix it. The owner of the server is alerted about this error!",
            footer: {
                text: "From VietInDE with love <3",
                icon_url: interaction.guild.iconURL()
            }
        }], emphemeral: true })
        const logChannel = await interaction.guild.channels.fetch("1110163677799264367");
        if(logChannel) {
            const errorStr = error.toString().substring(0, 1900)
            logChannel.send({ content: errorStr })
        }
    },
    server: async (client, error) => {
        const logChannel = await interaction.guild.channels.fetch("1110163677799264367");
        if(logChannel) {
            const errorStr = error.toString().substring(0, 1900)
            logChannel.send({ content: errorStr })
        }
        console.log(error)
    }
}