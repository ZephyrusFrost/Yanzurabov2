const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "files",
    author: "Kyle pogi",
    version: "1.0.0",
    countDown: 5,
		role: 2,
    description: "Creates a new file in the cmds folder and writes the provided text to the file",
    usage: "fs creat <filename> <text>",
    example: "fs creat hi.js wassup nigga"
  },

  onStart: async function ({ args, message }) {
    const fileName = args[0];
    const text = args.slice(1).join(" ");

    
    if (!fileName || !text) {
      return message.reply("⚠️ | use:fs hi.js wassup nigga for example and your bot will create a file at commands with name hi.js and he put inside wassup nigga (example) recommended to create commands from caht....\n\nMODED BY 「KYLE BAIT-IT」");
    }

    
    const filePath = path.join(__dirname, '..', 'cmds', fileName);

    
    fs.writeFile(filePath, text, (err) => {
      if (err) throw err;
      message.reply(`file ${fileName} restart the bot/cmd load the command`);
    });
  }
};