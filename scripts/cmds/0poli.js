module.exports = {
  config: {
  name: "poli",
  version: "1.0.",
  author: "loid senpai",
  countDown: 5,
  role: 0,
  shortDescription: { en: "0",},
  longDescription: { vi: "1",},
  category: "ai",
  guide: { en: "3",},
  };
};
module.exports.run = async ({api, event, args }) => {
const axios = require('axios');
const fs = require('fs-extra');
 let { threadID, messageID } = event;
  let query = args.join(" ");
  if (!query) return api.sendMessage("put text/query", threadID, messageID);
let path = __dirname + `/cache/poli.png`;
  const poli = (await axios.get(`https://image.pollinations.ai/prompt/${query}`, {
    responseType: "arraybuffer",
  })).data;
  fs.writeFileSync(path, Buffer.from(poli, "utf-8"));
  api.sendMessage({
    body: "Image will be deleted after 1 hour!",
    attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID);
};