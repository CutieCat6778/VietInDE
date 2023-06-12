const { Events } = require("discord.js")

module.exports = {
    name: Events.Debug,
    once: false,
    execute: (client, text) => {
        console.log(text)
    }
}