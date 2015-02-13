var http     = require('http'),
    director = require('director'),
    routes   = require('./actions'),
    router, server, port


router = new director.http.Router({
    '/': {
        get:  routes.ping,
        post: routes.pong
    }
})

server = http.createServer(function(req, res) {
    req.chunks = []
    req.on('data', function(chunk) {
        req.chunks.push(chunk.toString())
    })

    router.dispatch(req, res, function(err) {
        res.writeHead(err.status, {
            "Content-Type": "text/plain"
        })
        res.end(err.message)
    })
})

port = Number(process.env.PORT || 5000)

server.listen(port)
