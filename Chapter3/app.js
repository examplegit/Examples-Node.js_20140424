
{ // Chapter 3.3 Hello World 
    console.log('Hello World!');
}

{ // Chapter 3.4.1 全域變數
    console.log(global);
    console.log(__filename);
    console.log(__dirname);
    console.log('Hello');
}

{ // Chapter 3.4.1 全域變數 - console.time 執行區間的時間計算
    console.time('10-elements');

    for (var i = 0; i < 10; i++) {
        console.log('Index is '+ i);
    }

    console.timeEnd('10-elements');
}

{ // Chapter 3.4.2核心功能process - process.argv 取得代入的命令參數
    for (var index in process.argv) {
        console.log('argv[' + index + ']=' + process.argv[index]);
    }
}

{ // Chapter 3.4.2核心功能process - process.chdir 改變程序執行的目錄
    console.log('Starting directory: ' + process.cwd());

    try {
        process.chdir('/tmp');
        console.log('New directory: ' + process.cwd());
    } catch (err) {
        console.log('chdir: ' + err);
    }
}

{ // Chapter 3.4.2核心功能process - process.argv 取得代入的命令參數
    console.log(process.memoryUsage());
}

{ // Chapter 3.4.2核心功能process - process.initgroups 改變程序的 Group Access List

    console.log(process.getgroups());  // [ 0 ]
    process.initgroups('wesley', 1000); // switch user
    console.log(process.getgroups());  // [ 27, 30, 46, 1000, 0 ]
    process.setgid(1000);                 	  // drop root gid
    console.log(process.getgroups());  // [ 27, 30, 46, 1000 ]

}

{ // Chapter 3.4.3常用功能util - util.inherits 繼承原型物件
    var util = require('util');

    var MyBaseObject = function() {};

    MyBaseObject.prototype.hit = function() {
        console.log('Hit!');
    };

    // 一個新的原型物件
    var MyChildObject = function() {};

    // 繼承 MyBaseObject
    util.inherits(MyChildObject, MyBaseObject);

    var obj = new MyChildObject();

    obj.hit();
}

{ // Chapter 3.4.4 事件驅動EventEmitter
    var MyObject = function() {
        this.count = 0;
    };

    MyObject.prototype.touch = function() {
        this.count++;
    };
}

{ // Chapter 3.4.4 事件驅動EventEmitter
    var events = require('events');
    var util = require('util');

    var MyObject = function() {
        this.count = 0;
    };

    // 直接繼承 EventEmitter 來讓我們的原型得到事件驅動的能力
    util.inherits(MyObject, events.EventEmitter);

    MyObject.prototype.touch = function() {
        this.count++;
        this.emit('touched', this.count);
    };

    var myObj = new MyObject();

    myObj.on('touched', function(count) {
        console.log('Object was touched already. ' + count);
    });

    myObj.touch();
    myObj.touch();
    myObj.touch();
}

{ // Chapter 3.4.6 檔案系統操作filesystem - 同步﹝Synchronous﹞
    var fs = require('fs');

    try {
        fs.unlinkSync('/tmp/hello')
        console.log('successfully deleted /tmp/hello');
    } catch (err) {
        console.log('Fail to delete /tmp/hello: ' + err);
    }
}

{ // Chapter 3.4.6 檔案系統操作filesystem - 非同步﹝Asynchronous﹞
    var fs = require('fs');

    fs.unlink('/tmp/hello', function (err) {
        if (err) throw err;

        console.log('successfully deleted /tmp/hello');
    });
}

{ // Chapter 3.4.7加密機制 crypto
    var crypto = require('crypto');

    var encrypted = crypto.createHmac('sha256', 'MyPassword');

    console.log(encrypted.digest('hex'));
}










