function forAsync(cur, end, callback) {

    process.nextTick(function() {
        if (cur <= end) {

            // ...

            // 進入下一個迴圈工作
            forAsync(cur+1, end, callback);
            return;
        }

        // 迴圈結束
        callback();
    });
}

forAsync(0, 999999999, function() {
    // 迴圈執行完成
});
