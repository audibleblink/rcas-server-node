var http   = require('http'),
    fs     = require('fs'),
    nStatic = require("node-static"),
    files  = new nStatic.Server("./public"),
    port   = Number(process.env.PORT || 5005),
    fb     = require('firebase'),
    fBase  = new fb("https://blazing-heat-7747.firebaseio.com/members")


var server = http.createServer(function(req, res) {
    
    req.addListener("end", function(){
        files.serve(req, res)
    }).resume()

})

var io = require('socket.io')(server)

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

    socket.on("gamer added", function(gamer){
        fBase.push(gamer)
    })

    socket.on("disconnect", function(){
    })
})

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});
