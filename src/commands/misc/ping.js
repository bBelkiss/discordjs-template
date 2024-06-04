const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
require("colors");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("Test if everything works.")
    .toJSON()
  ,
  testMode: false,
  devOnly: false,
  deleted: false,
  userPermissions: [],
  botPermissions: [],

  run: (client, interaction) => {
    try {
      //...
    } catch (err) {
      console.log("[ERROR] ".red + "Error in your ping.js run function:");
      console.log(err);
    };
  },
};