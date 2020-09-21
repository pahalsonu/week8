//parshanth work
// /* 
// 1. primary file to handle all the api's
// 2. @Author : Sonu Pahal
// 3. @DESC : Implementing Restful API's
// */
// const http = require('http');
// const url= require('url');

// const port = process.env.PORT || 3000
// const server = http.createServer((req,res)=>{
//     const parsedUrl = url.parse(req.url, true);
//     //get the path
//     const path = parsedUrl.pathname;
//     const trimmedPath = path.replace(/^\/+|\/+$/g,'');
//     console.log(trimmedPath)
// const method = req.method.toLowerCase();
// //get the query params as an object

// const queryStringObjects = parsedUrl.query

//     //get the url and parse
//     //getheaders
//     const headers = req.headers;
//     console.log(parsedUrl,queryStringObjects,headers)
    
  
//     res.end("hello");
// })
// server.listen(port, ()=>{
//     console.log("server started at ....")
// })



// my practice with detailed notes
//attching a picture too for input on node.js, http3rdday.js and postman


const http = require('http');
const url = require('url');
const stringDecoder = require('string_decoder').StringDecoder;

const port = process.env.PORT || 5000;

const server = http.createServer( (req, res) => {
    const parsedUrl = url.parse(req.url,true);
    console.log(parsedUrl);
/* run in node , ouput will be server started at 5000, 
now open postman and get 127.0.0.1:5000/
click send ,,, postman will show trial is done, and node.js shows '/'
*/

console.log(parsedUrl.pathname);
/* lets find out path name,,, now open postman and get 127.0.0.1:5000/pahal_or_anypath,,, 
node.js will show           pahal_or_any_pathname with previous ouputs*/

console.log(parsedUrl.query);
    /* lets find out path name,,, now open postman and get 127.0.0.1:5000/pahal_or_anypath ?myname=sonu&lastname=pahal,,, 
node.js will show { ' myname': 'sonu', ' lastname': 'pahal,' } with previous ouputs */

const method = req.method.toLowerCase()
console.log(method)
/* lets find out path name  ,,open postman and click on previous url send,,,, 
node js will show get*/

const headers = req.headers
console.log(headers);

//same for headers,,,, node.js will show toke accept and useful data

const decoder = new stringDecoder('utf-8');

    let buffer = '';

    req.on('data', (data) => {
        buffer += decoder.write(data);
    });

    req.on('end', () => {
        buffer += decoder.end();
               console.log(buffer);
    })
    res.end('Trial is done')

    //at last run this in browser localhost:5000,,, ctrl+shift+i, localstorage,,,localhost:5000

})

server.listen(port, () => {
    console.log('server started at '+ port)
})