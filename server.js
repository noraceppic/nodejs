const http =require("http");
const { CLIENT_RENEG_WINDOW } = require("tls");
//const port=5000;
/* const port =process.env.PORT|| 5000;
const server =http.createServer((req, res)=>{
res.statusCode =200
res.setHeader('content-type','text/html')
res.end( '<h1><h1/> Welcom to node.js server')

})
 server.listen(port,()=>{
  console.log (`server lancé à l'adresse http://127.1.1.1:${port}`)

}) */
/* 
const server = http.createServer();
server.listen(port,'localhost');
server.on('request',(request, respose )=> {
    const content_type= ('content_type', content_type);
    respose.write()
}) */
const https = require('https');

const options = {
  hostname: 'github.com',
  port: 443,
  path: '/usres/noraceppic',
  method: 'GET',
  
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

req.end();