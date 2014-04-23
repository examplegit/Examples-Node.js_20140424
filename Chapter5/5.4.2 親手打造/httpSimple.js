var http = require('http');

// 建立連線
var req = http.request({
    hostname: 'www.google.com',
    path: '/',
    method: 'GET'
}, function(res) {
    console.log('Processed.');

    // 收到資料
    res.on('data', function(chunk) {
        console.log(chunk.toString());
    });

    // 完成並結束程式
    res.on('end', function(chunk) {
        process.exit();
    });
});
req.end();
