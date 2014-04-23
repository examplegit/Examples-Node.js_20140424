var express = require('express');
var app = express();

app.configure(function() {
    // 啟用cookie解析器
    app.use(express.cookieParser());

    // 啟用cookieSession
    app.use(express.cookieSession({
        key: 'node',
        secret: "HelloExpressSESSION"
    }));

    // 啟用 body 解析器
    app.use(express.bodyParser());
    
    // 啟用路由機制
    app.use(app.router);
});


app.listen(12345);

