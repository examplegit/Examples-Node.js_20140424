var express = require('express');
var bodyParser = require('body-parser');

// 建立一個 Express 伺服器
var app = express();

// 設定bodyParser支援application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ 
	
	// 在bodyParser處理Query String
	extended: true 
}));

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

