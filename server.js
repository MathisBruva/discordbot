const Discord = require('discord.js');
const client = new Discord.Client({intents: ['GUILDS', 'GUILD_MESSAGES']});

client.on('ready', () => {
    console.log('ready');
});

client.login(process.env.TOKEN);