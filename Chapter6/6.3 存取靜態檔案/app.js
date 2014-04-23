var express = require('express');
var app = express();

app.configure(function() { //Only support express under 3.x
    // 設定靜態檔案所在目錄
    app.use(express.static(__dirname + '/public'));
});

app.listen(12345);




























