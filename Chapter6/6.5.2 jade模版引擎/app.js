var express = require('express');

// 建立一個 Express 伺服器
var app = express();

app.set('views', __dirname + '/views'); 
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('mypage', { msg1: 'Hello Template' });
});

app.listen(12345);
