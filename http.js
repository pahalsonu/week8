//1

const http = require('http');
const url = require('url');
const port = process.env.PORT || 8080;
const server = http.createServer((req,res)=>{
    res.write("<h1> Hello there</h1>");
    res.write("<p>I am Another Line</p>");
    let q = url.parse(req.url,true).query;
    var out = q.fname + " " + q.lname;
    res.end(out);
})
server.listen(port, ()=>{
    console.log(`Server Started at ${port}`);
});


//2


const http = require('http');
const url = require('url');
const fs = require('fs');
const port = process.env.PORT || 8080;
const server = http.createServer((req,res)=>{
   let q = url.parse(req.url,true).query;
   let fname = q.fname;
   let email = q.email;
   let password = q.password;
   let out = `${fname}  ${email}  ${password}`;
   fs.writeFile('form_data.txt', out, (err)=>{
       if(err){
           res.statusCode = 500;
           res.end("<h1>Server Error</h1>");
       }else{
           res.statusCode = 200;
           res.end("<h1> Data Saved Successfully</h1>");
       }
   });
})
server.listen(port, ()=>{
    console.log(`Server Started at ${port}`);
});