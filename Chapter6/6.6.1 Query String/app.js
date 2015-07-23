var express = require('express');

// 建立一個 Express 伺服器
var app = express();

app.get('/mydir/hello', function(req, res) {
    console.log(req.query.name);
    console.log(req.query.country);
    res.send('Your name is ' + req.query.name);
    res.end();
});

app.listen(12345);
