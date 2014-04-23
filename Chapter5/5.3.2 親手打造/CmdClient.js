var net = require('net');

// 建立Object，儲存要送出的命令和參數
var cmd = {
    command: process.argv[2],
    args: []
};

// 取得所有的命令參數
for (var i = 3; i < process.argv.length; i++) {
    cmd.args.push(process.argv[i]);
}

// 建立一個socket連線
var socket = new net.Socket();

// 連線到localhost本機的56789 port
socket.connect(56789, 'localhost', function() {

    // 將命令物件轉成JSON送出
    socket.write(JSON.stringify(cmd));

    // 接收結果
    socket.on('data', function(data) {
        // 印在畫面上
        console.log(data.toString());
    });

    // 連線中斷
    socket.on('end', function() {
        // 結束程式
        process.exit();
    });
});
