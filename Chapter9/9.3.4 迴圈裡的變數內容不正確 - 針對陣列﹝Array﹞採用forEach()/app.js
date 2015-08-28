var list = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ];

// 使用forEach遍歷陣列
list.forEach(function(element, index, arr) {

    // 使用非同步的函數，以setTimeout()為例子
    setTimeout(function() {

        // 在新事件中去取得for迴圈的index和陣列的資料，然後印出來
        console.log(index + ': ' + element);
    }, 0);
});

