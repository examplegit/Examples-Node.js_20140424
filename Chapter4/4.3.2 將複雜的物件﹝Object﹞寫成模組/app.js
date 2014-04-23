var object_module = require('./object_module');

// 取得鍵值
console.log(object_module.name);
console.log(object_module.desc);
console.log(object_module.url);

// 將陣列元素一一列出
for (var index in object_module.supports) {
    console.log(object_module.supports[index]);
}
