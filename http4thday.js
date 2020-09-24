const http = require('http');

const url = require('url');
const https = require('https')
const stringDecoder = require('string_decoder').StringDecoder;
const config = require("./http4thday2")
const _data = require('./lib/data');

_data.create('test', 'newFile', { 'fake': 'data' }, (err) => {
    console.log(err)
})

const port = 5000

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    // console.log(parsedUrl);
    /* run in node , ouput will be server started at 5000, 
    now open postman and get 127.0.0.1:5000/
    click send ,,, postman will show trial is done, and node.js shows '/'
    */

    /* lets find out path name,,, now open postman and get 127.0.0.1:5000/pahal_or_anypath,,, 
    node.js will show           pahal_or_any_pathname with previous ouputs*/


    /* lets find out path name,,, now open postman and get 127.0.0.1:5000/pahal_or_anypath ?myname=sonu&lastname=pahal,,, 
node.js will show { ' myname': 'sonu', ' lastname': 'pahal,' } with previous ouputs */

    const method = req.method.toLowerCase()
        // console.log(method)
        /* lets find out path name  ,,open postman and click on previous url send,,,, 
        node js will show get*/

    const headers = req.headers
        // console.log(headers);

    //same for headers,,,, node.js will show toke accept and useful data

    const decoder = new stringDecoder('utf-8');

    let buffer = '';

    req.on('data', (data) => {
        console.log(data)
        buffer += decoder.write(data);

    });
    req.on('end', () => {
            buffer += decoder.end();
            // choose the handlers where request should go route path ..
            const chosenHandler = typeof(router[parsedUrl.pathname]) != 'undefined' ? router[parsedUrl.pathname] : handelers.notfound;
            // construct the data to send to the chosen handler
            const data = {
                    'pathname': parsedUrl.pathname,
                    'query': parsedUrl.query,
                    'method': method,
                    'headers': headers,
                    'payload': buffer
                }
                //route the request to the handlers that we choosed
            chosenHandler(data, (statusCode, payload) => {
                //use the statusCode called 
                statusCode = typeof(statusCode) == 'number' ? statusCode : 200;
                //use the payload called by the handlers or default to an empty object

                payload = typeof(payload) == 'object' ? payload : {};
                //convert it to final string
                payloadString = JSON.stringify(payload);
                //send the final response
                res.setHeader('content-Type', 'application/json')
                res.writeHead(statusCode);
                res.end(payloadString);
            })
        })
        //at last run this in browser localhost:5000,,, ctrl+shift+i, localstorage,,,localhost:5000

})

server.listen(port, () => {
        console.log(`server started at ${port} `)
    })
    //implimenting Route Handlers
const handelers = {};
handelers.sample = (data, callback) => {
    //callback returns a http status code and payload object
    callback(200, { 'Success': 'you just accessed / sample' });
}
handelers.notfound = (data, callback) => {
        //callback returns a http status code and payload object
        callback(400, { 'Status': 'no connected' });
    }
    // impliment a router
const router = {
    '/sample/': handelers.sample
}