const Arena = require("are.na");
const arena = new Arena();
let data;  

const getData = function() {
  return arena.channel("no-dream").get().then(chan => {
    return chan.contents;
  })

};

module.exports = getData();