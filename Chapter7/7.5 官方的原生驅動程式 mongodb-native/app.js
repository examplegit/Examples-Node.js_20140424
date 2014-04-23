var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

// 連接 MongoDB
MongoClient.connect('mongodb://localhost/test', function(err, db) {

    // 選擇資料表 contact
    db.collection('contact', function(err, collection) {

        // 取得 contact 資料表裡所有資料
        collection.find({}, function(err, rows) {

            // 印出 contact 資料表裡所有資料
            for (var index in rows)
                console.log(rows[index]);
        });

        collection.insert({
            name: 'Fred',
            tel: '0912345xxx',
            address: 'Taipei'
        }, function(err, docs) {
        if (err) {
            // 插入資料失敗
            return;
        }
            // 插入資料成功
        }); 
        
    });
    
    var contact = db.collection('contact');    
    
    contact.find({}, function(err, docs) {
        if (err) {
            // 查詢失敗，過程出現錯誤
            return;
        }
        
        docs.each(function(err, doc) {
            if(err)
                throw err;
            if(doc==null)
                return;
         
            console.log("document find:");
            console.log(doc.name);
        });  
        
        
        // 列出所有資料
        /*
        for (var index in docs) {
            var doc = docs[index];

            // 印出名字
            console.log(doc.name);
        }*/
    });

    contact.find({ name: 'Fred' }, function(err, docs) {
        if (err) {
            // 查詢失敗，過程出現錯誤
            return;
        }

        //
        docs.each(function(err, doc) {
            if(err)
                throw err;
            if(doc==null)
                return;
         
            console.log("document find[name]:");
            console.log(doc.name);
        });  
        //
        
        // 列出所有資料
        /*
        for (var index in docs) {
            var doc = docs[index];

            // 印出名字
            console.log(doc.name);
        }*/
    });   
  
    contact.remove({ name: 'Fred' }, function(err) {
        if (err) {
            // 刪除資料失敗
            return;
        }

        // 刪除資料成功
    });

    contact.insert({
        name: 'Fred',
        tel: '0912345xxx',
        address: 'Taipei'
    }, function(err, docs) {
    if (err) {
        // 插入資料失敗
        return;
    }
        // 插入資料成功
    }); 
        
    contact.update({ name: 'Fred' }, {
        name: 'Fred',
        tel: '098765432x',
        address: 'Taiwan'
    }, function(err) {
        // Do stuffs ...
    });

    contact.update({ name: 'Fred' }, {
        $set: {
            tel: '098765432x'
        }
    }, function(err) {
        if (err)
            console.log('修改特定欄位失敗');
        else
            console.log('刪除特定欄位成功');
    });
    
});
