var express = require('express');
var bodyParser = require('body-parser');

// 建立一個 Express 伺服器
var app = express();

// 設定靜態檔案所在目錄
app.use(express.static(__dirname + '/public'));

// 設定bodyParser支援application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ 
	
	// 不用在bodyParser處理Query String
	extended: false 
}));

app.post('/mydir/hello', function(req, res) {
    console.log(req.body.name);
    console.log(req.body.country);

    // 回傳使瀏覽器印出輸入內容
    res.send('Name: ' + req.body.name + ',  Country: ' + req.body.country);
    res.end();
});

app.listen(12345);

