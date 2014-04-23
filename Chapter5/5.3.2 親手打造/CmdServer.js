var net = require('net');
var child_process = require('child_process');

// 建立Server
var server = net.createServer();

// 監聽 56789 port
server.listen(56789);

// 當新的連線被建立
server.on('connection', function(socket) {
    var child = null;;
    var cmdStr = '';
    console.log('Connected.');

    // 接收遙控程式送來的命令
    socket.on('data', function(data) {
        console.log('Processed.');
        // 儲存所有的命令字串
        cmdStr += data.toString();

        // 檢查是否收到換行字元「\n」，代表命令接收完成
        if (data.toString().indexOf('\n') == -1) {
            // 沒收到換行字元，代表命令還沒全部傳送完成
            return;
        }
                
        // 收到的是JSON字串，我們必須先將資料內容轉成實體物件
        var cmd = JSON.parse(data);
        
        // 執行命令和代入參數
        child = child_process.spawn(cmd.command, cmd.args);
        
        // 接收命令的結果，並直接傳回給遙控程式
        child.stdout.on('data', function(output) {
            socket.write(output);
        });

        // 當命令結束時，也中斷與遙控程式的連線
        child.on('end', function() {
            socket.destroy();
            child = null;
        });
    });

    // 若遙控程式先行中斷連線，
    socket.on('end', function() {
        // 中止外部程式
        if (child)
            child.kill();
    });
});
