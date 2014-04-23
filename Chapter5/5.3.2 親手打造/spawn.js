var child_process = require('child_process');

var ls = child_process.spawn('ls', [ '-l' ]);

// 接收標準輸出的內容
ls.stdout.on('data', function(err, data) {
    console.log(data.toString());
});

ls.stderr.on('data', function (data) {
  console.log('stderr: ' + data.toString());
});

// 當外部程式結束時會產生end事件
ls.on('end', function(code) {
    console.log('Done');
});
