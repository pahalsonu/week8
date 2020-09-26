// //1
// const http = require('http');
// const url = require('url');
// const port = process.env.PORT || 8080;
// const server = http.createServer((req,res)=>{
//     res.write("<h1> Hello there</h1>");
//     res.write("<p>I am Another Line</p>");
//     let q = url.parse(req.url,true).query;
//     var out = q.fname + " " + q.lname;
//     res.end(out);
// })
// server.listen(port, ()=>{
//     console.log(`Server Started at ${port}`);
// });


// 2
const http = require('http');
const urll = require('url');
const fs = require('fs');
const port = process.env.PORT || 8080;
const server = http.createServer((re, ren) => {
    let q = urll.parse(re.url, true).query;
    let fname = q.fname;
    let email = q.email;
    let password = q.password;
    let out = `${fname}  ${email}  ${password}`;
    fs.writeFile('form24092020_data.txt', out, (err) => {
        if (err) {
            ren.statusCode = 500;
            ren.end("<h1>Server Error</h1>");
        } else {
            ren.statusCode = 200;
            ren.end("<h1> Data Saved Successfully</h1>");
        }
    });
})
server.listen(port, () => {
    console.log(`Server Started at ${port}`);
});