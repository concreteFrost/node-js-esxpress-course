const http = require('http')
const fs = require('fs')
const routing = require('./routing')
const _= require("lodash")



const server = http.createServer((request, response) => {
    //request coming from client
    //response coming from server

    let path = './views/';

    response.setHeader("Content-Type", 'text/html')

    path = routing(request, path).path;
    response.statusCode = routing(request, path).status

   
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            response.end(); //always put response.end in order to stop page loading
        }
        else {
            response.end(data); //always put response.end in order to stop page loading
        }
    })

});

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000')
});

