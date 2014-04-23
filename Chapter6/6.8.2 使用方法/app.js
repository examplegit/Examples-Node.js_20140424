var express = require('express');
var app = express();

app.configure(function() {
    // 啟用cookie解析器
    app.use(express.cookieParser());

    // 啟用Session
    app.use(express.session({ secret: 'HelloExpressSESSION' }));

    // 啟用 body 解析器
    app.use(express.bodyParser());
    
    // 啟用路由機制
    app.use(app.router);
});

app.get('/mysession', function(req, res) {

    // 檢查session裡的count欄位是否存在
    if (req.session.count) {
        // 將count加一
        req.session.count++;
    } else {
        // 建立欄位並令初始值為一
        req.session.count = 1;
    }
    console.log(req.session.count);
    // 將目前count欄位內的值回傳給瀏覽器
    res.send(req.session.count);
    res.end();
});

app.listen(12345);

