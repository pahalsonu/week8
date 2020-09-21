const http = require('http');
const url = require('url');

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


    res.end('Trial is done')

})

server.listen(port, () => {
    console.log('server started at '+ port)
})