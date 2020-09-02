const http =require('http');
const fs =require('fs');
http.createServer((req,res)=>
{   
  fs.appendFile('home.txt','my anemghjk',(err,data)=>
  {
      fs.readFile('home.txt',(err,data)=>{
      res.writeHead(200,{'content-text':'text/plain'})
      res.write(data)
      res.end()
  });   
  
})

}).listen(3001,()=>console.log("you are connected to server with port no 3001"));