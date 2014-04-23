var async = require('async');

// 建立一個陣列
var arr = [ 'one', 'two', 'three' ];

// 運用 async 模組，以非同步的方式印出所有陣列元素
async.each(arr, function(item, next) {
    console.log(item);
    next();
}, function() {
    // 印出完成
    console.log('That\'s all.');
});
