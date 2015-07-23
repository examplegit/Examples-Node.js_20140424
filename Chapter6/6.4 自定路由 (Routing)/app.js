var express = require('express');

// 建立一個 Express 伺服器
var app = express();

// 設定靜態檔案所在目錄
app.use(express.static(__dirname + '/public'));

// GET方法的路由，用來處理「/myroute」路徑
app.get('/myroute', function(req, res) {
    // 傳送字串回瀏覽器
    res.send('This is GET method');
    res.end();
});

// POST方法的路由，用來處理「/」路徑
app.post('/myroute', function(req, res) {
    // 傳送字串回瀏覽器
    res.send('This is POST method');
    res.end();
});

app.listen(12345);

