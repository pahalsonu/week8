const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const stringDecoder = require('string_decoder').StringDecoder;
const decoder = new stringDecoder('utf-8');
const handlers = require('./routers');
const port = 8080;
const helpers = require('./helpers');
const { parseJsonToObject } = require('./helpers');




const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true)
        // console.log(parsedUrl);

    const path = parsedUrl.pathname;

    const method = req.method.toLowerCase();



    let buffer = "";
    req.on('data', (data) => {
        buffer += decoder.write(data);

    });

    req.on('end', () => {
        buffer += decoder.end();
        const chosenHandler = typeof(routers[path]) != 'undefined' ? routers[path] : handelers.notFound;

        const data = { 
            'path': path,
            'method': method,
            'payload': helpers.parseJsonToObject(buffer)
        }
console.log(data.payload)
        chosenHandler(data, (statusCode, payload) => {
            statusCode = typeof(statusCode) == 'number' ? statusCode : 200;
            payload = typeof(payload) == 'object' ? payload : {};
            payloadString = JSON.stringify(payload);
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(statusCode);
            res.end(payloadString);
            console.log(statusCode, payloadString);
        })



    })


})

server.listen(port, () => {
    console.log(`server started at ${port}`)
})

const routers = {
    '/users': handlers.users

}