var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

// 建立一個伺服器
http.createServer(function(req, res) {
    // 解析 req 以取得客戶端要求的檔案名稱
    console.log('req.url ' + req.url);
    var filename= url.parse(req.url).pathname;

    // 於程式所在目錄尋找該檔案
    var filepath = path.join(__dirname, filename);
    console.log('filepath ' + filepath);

    // 檢查目標檔案是否存在
    fs.exists(filepath, function(exists) {
        if (!exists) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not Found\n');
            return;
        }

        // 讀取檔案內容
        fs.readFile(filepath, function(err, content) {
            // 回傳檔案內容給網頁瀏覽器
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(content);
        });
    });

}).listen(12345);

console.log('Server running at http://127.0.0.1:12345/');
