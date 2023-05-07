const client = require("../index");

client.on("ready", async () => {
  console.log(`${client.user.username} Bot Aktif`);
  client.user.setActivity({
    name: `@${client.user.username} /yardım`,
    type: 0,
  });
});
