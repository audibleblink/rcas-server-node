var FB = require("firebase")

function ping() {
    this.res.writeHead(200)
    this.res.end("Hey, I'm Nawbot.")
}


function pong() {
    this.res.writeHead(200)
    this.res.end("Hey, I'm Nawbot.")
}

module.exports = {
  ping: ping,
  pong: pong
}
