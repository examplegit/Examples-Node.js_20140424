var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

// 主程序
if (cluster.isMaster) {

    // 依照CPU核心數量，生成同樣數量的Worker
    for (var i = 0; i < numCPUs; i++) {
        // 分出一個新的Worker ﹝新的程序﹞
        cluster.fork();
    }

    // 將所有Worker傳來的訊息顯示出來
    for (var worker in cluster.workers) {
        cluster.on('message', function(msg) {
            console.log(message);
        });
    }

    // 當 Worker 程序結束後，顯示出訊息
    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });

} else {
    // 被生成的 Worker 程序

    // 回傳自己的PID到主程序
    process.send(process.pid);
}
