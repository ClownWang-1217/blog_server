
//create a server
const serverHandler = require('../app')
const http = require('http');
const PORT = 3000;
const server = http.createServer(serverHandler);

server.listen(PORT,'localhost',()=>{

    console.log('server is running on PORT 3000');
})
    