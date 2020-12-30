const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const port = process.env.PORT || 300;
app.use(express.static(__dirname + '/dist/theApp'));
app.get('/*',(req,res)=> res.sendFiles(path.join(__dirname)));
const server = http.createServer(app);
server.listen(port,()=> console.log('Running..'));