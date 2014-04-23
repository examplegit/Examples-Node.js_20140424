var express = require('express');
var app = express();

app.configure(function() {
    app.set('views', __dirname + '/views'); 
    app.set('view engine', 'jade');

    // 啟用路由機制
    app.use(app.router);
});

app.get('/', function(req, res) {
    res.render('mypage', { msg1: 'Hello Template' });
});

app.listen(12345);

