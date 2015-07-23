var express = require('express');
var cookieSession = require('cookie-session')

// 建立一個 Express 伺服器
var app = express();

// 啟用cookieSession
app.use(cookieSession({
    key: 'node',
    secret: 'HelloExpressSESSION'
}))

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
	res.sendStatus(req.session.count);
    res.end();
});

app.listen(12345);

