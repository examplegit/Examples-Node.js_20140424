var express = require('express');
var app = express();

app.configure(function() {
    // 啟用路由機制
    app.use(app.router);
});

app.get('/mydir/hello', function(req, res) {
    console.log(req.query.name);
    console.log(req.query.country);
});


app.listen(12345);

