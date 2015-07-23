var express = require('express');

// 建立一個 Express 伺服器
var app = express();

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('mypage', { title: 'Hi EJS', list:	['Fred', 'Wesley', 'Lzy'] });
});

app.listen(12345);
