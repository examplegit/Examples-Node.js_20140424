var express = require('express');
var app = express();

app.configure(function() {
    // 啟用 body 解析器
    app.use(express.bodyParser());
    
    app.use(function(req, res, next) {

        // 輸出字串到瀏覽器
        res.send('Insert text before content.');

        // 交給下一個 Middleware 繼續處理
        next();
    });

    // 啟用路由機制
    app.use(app.router);
});

app.listen(12345);

