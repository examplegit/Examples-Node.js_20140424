var express = require('express');
var bodyParser = require('body-parser');

// 建立一個 Express 伺服器
var app = express();

// 設定bodyParser支援application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ 
	
	// 在bodyParser處理Query String
	extended: true 
}));

app.get('/mydir/hello/:name', function(req, res) {
    console.log(req.params.name);
});

app.post('/mydir/hello/:name', function(req, res) {
    console.log(req.params.name);
});

app.listen(12345);

