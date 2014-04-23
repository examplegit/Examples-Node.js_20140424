var list = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ];

// 使用for迴圈遍歷陣列
for (var index in list) {

    // 使用非同步的函數，以setTimeout()為例子
    setTimeout(function() {

        // 在新事件中去取得for迴圈的index和陣列的資料，然後印出來
        console.log(index + ': ' + list[index]);
    }, 0);
}
