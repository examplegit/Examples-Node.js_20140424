var express = require('express');
var app = express();

app.configure(function() {
    // 啟用 body 解析器
    app.use(express.bodyParser());

    // 啟用路由機制
    app.use(app.router);
});

app.get('/mydir/hello/:name', function(req, res) {
    console.log(req.params.name);
});

app.post('/mydir/hello/:name', function(req, res) {
    console.log(req.params.name);
});


app.listen(12345);

