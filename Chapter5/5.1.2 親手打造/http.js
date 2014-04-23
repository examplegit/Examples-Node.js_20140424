var http = require('http');

// 建立一個伺服器
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});

// 監聽 12345 port
server.listen(12345); 

console.log('Server running at http://127.0.0.1:12345/');
