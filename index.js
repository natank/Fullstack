let http = require('http')
let server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<html><body><h1>Gello from web site</h1></body><html>")
  res.end();
})

server.listen(8000)
console.log("server is running")