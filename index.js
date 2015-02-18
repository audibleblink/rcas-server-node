var http   = require('http'),
    statik = require("node-static"),
    fb     = require('firebase'),
    fBase  = new fb("https://blazing-heat-7747.firebaseio.com/members")


var server = http.createServer(function(req, res) {

    var assets  = new statik.Server("./public")
    
    req.addListener("end", function(){
        assets.serve(req, res)
    }).resume()

})


var io = require('socket.io')(server)

io.on("connection", function(clientSocket){
    console.log("client connected")


    fBase.on("value", function(snapshot){
        var players = []
        // Firebase reimplementation of forEach
        // for their own objects. No map/reduce =(
        snapshot.forEach(function(snapItem) {
            var player = snapItem.val()
            player.key = snapItem.key()
            players.push(player)      
        })

        clientSocket.emit("fbChange", players)
    })


    clientSocket.on("gamer added", function(gamer){
        fBase.push(gamer)
    })


    clientSocket.on("gamer deleted", function(obj){
        console.log("deleting player with key: " + obj.key)
        fBase.child(obj.key).remove()
    })
})

var port = Number(process.env.PORT || 5005)

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});
