var http = require("http");
var port = 8080;
const hostname = "localhost";

 const server = http.createServer((req,res)=>{
     count = 0;
    
     var count = count + 1;
     console.log("i am in this call back. I took hit " +count);
     res.statusCode=200;
     res.setHeader("cont", "text");
     res.end(JSON.stringify({status:"success"}))
   

 })
server.listen(port,()=>{
    console.log(`server started at ${hostname}:${port}`);

})
