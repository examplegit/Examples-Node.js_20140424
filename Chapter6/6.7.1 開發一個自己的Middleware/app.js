var express = require('express');
var bodyParser = require('body-parser');

// 建立一個 Express 伺服器
var app = express();

app.use(function (req, res, next) {
    res.send('Insert text before content.');
    next();
})

// 設定bodyParser支援application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ 
	
	// 在bodyParser處理Query String
	extended: true 
}));

app.get('/mydir/hello', function(req, res) {
    console.log(req.query.name);
    console.log(req.query.country);
    res.end();
});

app.listen(12345);

