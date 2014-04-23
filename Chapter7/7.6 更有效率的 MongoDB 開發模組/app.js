var mongoose = require('mongoose');

// 連線到localhost上的MongoDB，使用test資料庫
mongoose.connect('mongodb://localhost/test');

// 定義存取Cat資料表的模式，定義一個欄位name，是字串態別
var Cat = mongoose.model('Cat', {
    name: String,
    age: Number
});

// 建立一筆貓的新資料，name欄位是Zildjian
var kitty = new Cat({ name: 'Zildjian', age: 10 });

// 存入該資料到MongoDB
kitty.save(function (err) {

    if (err) {
        // 存入失敗
        console.log('Something\'s wrong');
        return;
    }

    // 存入成功
    console.log('meow');
});

var kitty = new Cat();
kitty.name = 'Kitty';
kitty.age = 5;
kitty.save();

Cat.find(function(err, cats) {

    for (var index in cats) {
        var cat = cats[index];

        console.log(cat.name);
    }
});

Cat.find({ name: 'kitty' }, function(err, cats) {

    for (var index in cats) {
        var cat = cats[index];

        console.log(cat.name);
    }
});

// 尋找age大於等於5的資料
Cat.find({ age: { $gte: 5 } }, function(err, cats) {
    // Do stuffs
});

// 尋找name裡面包含kitty字串的資料
Cat.find({ name: /kitty/i }, function(err, cats) {
    // Do stuffs
});

Cat.remove({ name: 'Zildjian' }, function(err) {
    if (err)
        console.log('刪除失敗');
    else
        console.log('刪除成功');
});

// 尋找name為Zildjian的資料，然後修改成Blue，並且把age改成11
Cat.update({ name: 'Zildjian' }, { name: 'Blue', age: 11 }, function(err) {
    if (err)
        console.log('修改失敗');
    else
        console.log('刪除成功');
});

Cat.update({ name: 'Zildjian' }, { $set: { age: 11 } }, function(err) {
    if (err)
        console.log('修改特定欄位失敗');
    else
        console.log('刪除特定欄位成功');
});
