var express = require('express');

// 建立一個 Express 伺服器
var app = express();

app.set('views', __dirname + '/views'); 
app.set('view engine', 'jade');

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

app.get('/', function(req, res) {
    res.render('mypage');
});

app.listen(12345);

