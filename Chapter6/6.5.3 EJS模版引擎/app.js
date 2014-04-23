var express = require('express');
var app = express();

app.configure(function() {
    app.set('views', __dirname + '/views'); 
    app.set('view engine', 'ejs');

    // 啟用路由機制
    app.use(app.router);
});

app.get('/', function(req, res) {
    res.render('mypage', { title: 'Hi EJS', list:	['Fred', 'Wesley', 'Lzy'] });
});

app.listen(12345);

