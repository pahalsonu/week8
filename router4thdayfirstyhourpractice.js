const http = require('http');
const url = require('url');
const https = require('https');
const port  = 8080;
const stringDecoder = require('string_decoder').StringDecoder;

const server = http.createServer((req,res) => {
    const parsedUrl = url.parse(req.url, true);
    const decoder = new stringDecoder('utf-8');
    let buffer = '';
    req.on('data', (data) => {
        console.log(data);
        buffer = buffer +decoder.write(data);
    });
req.on('end', () => { 
             buffer += decoder.end();
             const chosenHandler = typeof(router[parsedUrl.path]) != 'undefined' ? router[parsedUrl.pathname] : handerlers.notfound;
const data = {

    'pathname': parsedUrl.pathname,
    'query': parsedUrl.query,
    'method': req.method,
    'headers': req.headers,
    'payload': buffer
}
chosenHandler(data, (statusCode, payload)=>{
    tatusCode = typeof(statusCode) == 'number' ? statusCode : 200;
    payload = typeof(payload) == 'object' ? payload : {};
    payloadString = JSON.stringify(payload);
    res.setHeader('content-Type', 'application/json')
    res.writeHead(statusCode);
    res.end(payloadString);

})

});



})

server.listen(port, () =>{
    console.log(`server startes at ${port}`)
})

const handerlers = {};

handerlers.sample = (data, callback) => {
    callback(200, { 'success' : 'you just accessed path'})
}

handerlers.notfound = (data, callback) => {
    callback(400, { 'status'  :'not connected'})
}
const router = {
    '/pathname/' : handerlers.sample
};

