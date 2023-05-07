const { Message } = require("discord.js");
const BOT = require("../../../handlers/Client");

module.exports = {
  name: "ping",
  description: `Botun pingini gösterir`,
  userPermissions: [],
  botPermissions: [],
  category: "Bilgi",
  cooldown: 5,
  /**
   *
   * @param {BOT} client
   * @param {Message} message
   * @param {String[]} args
   * @param {String} prefix
   */
  run: async (client, message, args, prefix) => {
    // Code
    
  },
};
