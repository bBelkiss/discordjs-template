const { ContextMenuCommandBuilder, ApplicationCommandType, PermissionFlagsBits } = require("discord.js");
require("colors");

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("exampleCTM")
    .setType(ApplicationCommandType.User)
    .toJSON()
  ,
  testMode: false,
  devOnly: false,
  deleted: false,
  userPermissions: [],
  botPermissions: [],

  run: async (client, interaction) => {
    try {
      //...
      
    } catch (err) {
      console.log("[ERROR] ".red + "Error in your exampleCM.js run function:");
      console.log(err);
    };
  }
};