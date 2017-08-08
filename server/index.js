const http = require('http');

const server = http.createServer();

server.on('request',(req,res)=>{
 res.write('Hello node');   
 res.end();
});

server.listen(8080);