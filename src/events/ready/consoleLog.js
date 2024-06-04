require("colors");

module.exports = async (client) => {
  console.log("[INFO] ".green + `${client.user.username} is online!`);
};