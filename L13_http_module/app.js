const http = require('http');

const server = http.createServer(function(req,res){
    res.end("chal raha hj");

})

server.listen(3000)