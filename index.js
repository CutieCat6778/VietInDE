// Require the necessary discord.js classes
const { Client, GatewayIntentBits, Collection, Partials } = require('discord.js');
const { config } = require("dotenv")
const fs = require("node:fs");

// Calling the env files
config()

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers], partials: [Partials.User, Partials.GuildMember] });

client.commands = new Collection();
client.blockedCommands = new Array();
const linesRaw = fs.readFileSync("./asset/pickuplines.en.json", { encoding: "utf-8" })
const lines = JSON.parse(linesRaw)
client.usedLines = Array.from({length: lines.length}, (_, i) => i);

require("./handlers/commands.js")(client)
require("./handlers/events.js")(client)

require('./utils/registerSlashCommands.js')

// Log in to Discord with your client's token
client.login(process.env.TOKEN);