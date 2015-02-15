var http   = require('http'),
    fs     = require('fs'),
    port   = Number(process.env.PORT || 5005),
    fb     = require('firebase'),
    fBase  = new fb("https://blazing-heat-7747.firebaseio.com/members")


var server = http.createServer(function(req, res) {
    var index = fs.createReadStream("./public/index.html")
    index.pipe(res)

    io.on("connection", function(socket){
        console.log("client connected")

        fBase.on("value", function(snap){
            var players = []
            snap.forEach(function(snapItem) {
                var player = snapItem.val()
                player.key = snapItem.key()
                players.push(player)      
            })

            socket.emit("fbChange", players)
        })
    })
})

var io = require('socket.io')(server)

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});
