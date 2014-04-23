setTimeout(function() {
    console.log('Fire event!');
}, 1000);

// 用大量迴圈模擬一段需要執行很長時間的程式
var i, j, k;
for (i = 0; i <= 999999999; i++) {
    for (j = 0; j <= 999999999; j++) {
        for (k = 0; k <= 999999999; k++) {
            // ...
        }
    }
}
