var express = require('express');
var app = express();

app.configure(function() {
    // 啟用 body 解析器
    app.use(express.bodyParser());
    
    // 啟用路由機制
    app.use(app.router);
});

app.delete('/api/user/:id', function(req, res) {
    var id = req.params.id;

    // 從資料庫裡刪除使用者 ...
    db.delete(id, function(err, num) {
        if (err) {
            // 系統出錯
            res.status(400);
            return;
        }

        if (num == 0) {
            // 無此使用者
            res.status(404);
            return;
        }

        // 刪除成功
        res.status(200);
    });
});

app.listen(12345);

