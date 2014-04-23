var list = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ];

// 使用for迴圈遍歷陣列
for (var index in list) {

    // 建立一個立即執行的函數，形成閉包，並帶入index變數
    (function(index) {

        // 使用非同步的函數，以setTimeout()為例子
        setTimeout(function() {

            // 在新事件中去取得for迴圈的index和陣列的資料，然後印出來
            console.log(index + ': ' + list[index]);
        }, 0);
    })(index);
}

