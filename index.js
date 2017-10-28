const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');

const config = JSON.parse(fs.readFileSync(path.join(__dirname, "config.json"), "utf8"));

const client = new Discord.Client();

client.on('message', function(msg) {
	if(config.targets.indexOf(msg.author.id) != -1) msg.react('🤔');
});

client.login(config.token);
