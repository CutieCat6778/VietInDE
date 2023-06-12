// Require the necessary discord.js classes
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { config } = require("dotenv")

// Calling the env files
config()

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
client.blockedCommands = new Array();

require("./handlers/commands.js")(client)
require("./handlers/events.js")(client)

require('./utils/registerSlashCommands.js')

// Log in to Discord with your client's token
client.login(process.env.TOKEN);