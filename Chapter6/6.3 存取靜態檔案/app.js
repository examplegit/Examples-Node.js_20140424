var express = require('express');

// 建立一個 Express 伺服器
var app = express();

// 設定靜態檔案所在目錄
app.use(express.static(__dirname + '/public'));

app.listen(12345);
