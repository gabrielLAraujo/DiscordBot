const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bot')
		.setDescription('chama o bot'),
	async execute(interaction) {
		await interaction.reply('vai tomar no cu !');
	},
};