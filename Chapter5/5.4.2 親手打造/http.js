var http = require('http');
var path = require('path');
var fs = require('fs');
var url = require('url');

// 取得代入的網址，如果使用者沒有代入參數，則設為null值
var targetURL = process.argv[2] || null;
if (!targetURL) {
    // 沒有代入參數，則回傳錯誤訊息並終止程式
    console.log('請指定網址！');
    process.exit();
}

// 解析URL
var urlObj = url.parse(targetURL);

// 建立連線
var req = http.request({
    hostname: urlObj.hostname,
    path: urlObj.path,
    port: urlObj.port,
    method: 'GET'
}, function(res) {

    // 解析網址路徑，並取得檔案名稱
    var filename = path.basename(urlObj.path);

    // 檢查檔案是否已經存在本機
    fs.exists(filename, function(exists) {
        if (exists) {
            // 如果已經存在，刪除並重新下載
            fs.unlink(filename, function(err) {
                saveFile();
            });

            return;
        }

        // 儲存下載的檔案
        saveFile();
    });

    function saveFile() {
        // 收到資料
        res.on('data', function(chunk) {
            console.log(chunk.toString());
            fs.appendFileSync(filename, chunk);
        });

        // 完成並結束程式
        res.on('end', function(chunk) {
            process.exit();
        });
    }
});
req.end();