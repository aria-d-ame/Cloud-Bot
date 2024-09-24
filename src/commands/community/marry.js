const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const moneySchema = require('../../Schemas/money.js');
const levelSchema = require('../../Schemas/crimeSchema.js');

module.exports = {
  cooldown: 60,
	data: new SlashCommandBuilder()
		.setName('marry')
		.setDescription('Marry someone in the server!')
    .addUserOption(option => option.setName('user').setDescription('User you want to marry.').setRequired(true)),
	async execute(interaction) {

    const marryEmbed = new EmbedBuilder()
    .setColor(0x8269c2)
    .setTitle(`<:announce:1276188470250832014> CRIME <:announce:1276188470250832014>`)
    .setDescription(`**«═══✧ ✦ ✧ ✦ ✧═══»**\n`)

    await interaction.reply({ embeds: [marryEmbed] });
	},
};