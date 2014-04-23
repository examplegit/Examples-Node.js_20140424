
{ // Chapter 2.2 字串﹝String﹞ 
    var text = '';
    var text2 = "";
}

{ // Chapter 2.2 16bits浮點數﹝Number﹞ 
    var num1= .0001;
    var num2= 0.0001;
    var num3 = 1E-4;
    var num4= 1.0E-4;
}

{ // Chapter 2.2 布林值﹝boolean﹞ 
    var isEnd = true;
    if (isEnd) {
        console.log("The function is in the end: "+isEnd);
    }
}

{ // Chapter 2.2 函數﹝function﹞ 
    function number_print(num) {
        console.log("The number is : "+num);
    }
    number_print(123);

    function number_add(x, y) {
        var result = x+y;
        return result;
    }
    var num = number_add(1234, 2345);
    console.log("The result is : "+num);
}

{ // Chapter 2.2 物件﹝object﹞ 
    var company = new Object();
    company.name = 'mandice';
    company.url = 'www.mandice.com';
    company.establishment = new Date().setFullYear(2010,1,1);
}

{ // Chapter 2.2 陣列﹝array﹞ 
    var company = new Array();
    company.name = 'mandice';
    company.url = 'www.mandice.com';
    company.establishment = new Date().setFullYear(2010,1,1);
    company[0]=' Mandice Company. All rights reserved.';

    //可以透過for … in的方式把所有元素列舉出來
    for (var i in company) {
         console.log(i + '=> ' + company[i]);
    }
}

{ // Chapter 2.3 JSON 
    var myJSON = {
        "model": "xPhone",
        "color": 'white',
        "price": 10000,
        "vendor": {
            name: "Mandice",
            website: "http://www.mandice.com/",
            tel: [
                "88621231234",
                "88621231235"
            ]
        }
    }
}

{ // Chapter 2.3.2 建立JSON字串
    {//用Javascript建立物件
        var myObj = new Object();
        myObj.book = 'Node.js';
        myObj.chapter = 2;
    }
    {//用JSON建立物件
        var myObj = {
            'book': 'Node.js',
            'chapter': 2
        };
    }
    {//用Javascript建立陣列
        var myArr = new Array('one', 'two', 'three', 'four', 'five');
    }
    {//用JSON建立陣列
        var myArr = [ 'one', 'two', 'three', 'four', 'five' ];
    }
}

{ // Chapter 2.4.2 算數運算符﹝Arithmetic Operators﹞
    {
        var num = "1234";
        console.log(++num);  	 //輸出為1235
        console.log(num - 1);  	 //輸出為1234
        console.log(1 - num);  	 //輸出為-1234
    }
    {
        var num = "a1234";
        console.log(++num);   	//輸出為NaN
        console.log(num - 1);  	//輸出為NaN
        console.log(1 - num);  	//輸出為NaN
    }
}

{ // Chapter 2.4.4 比較運算符﹝Comparison Operators﹞與邏輯運算符﹝Logical Operators﹞ 
    {
        var string= "1234";
        var num = 1234;
        console.log( string === num );                      //輸出為false
        var String_true= "1";
        var Boolean_true = true;
        console.log( String_true === Boolean_true );        //輸出為false
    }
    {
        var stringA= "abc" + "def";
        var stringB= "abcd" + "ef";
        console.log(stringA === stringB);                   //輸出為true
    }
    {
        var string = "a1234";
        var StringObjectRefA = new String("a1234");
        var StringObjectRefB = new String("a1234");
        var StringRefA = string;
        var StringRefB = string;
        console.log(string === "a1234 ");                   //輸出為true
        console.log(StringObjectRefA === string);           //輸出為false
        console.log(StringObjectRefA === "a1234");          //輸出為false
        console.log(StringObjectRefA === StringObjectRefB); //輸出為false
        console.log(StringRefA === string);                 //輸出為true
        console.log(StringRefA === "a1234");                //輸出為true
        console.log(StringRefA === StringObjectRefB);       //輸出為false
        console.log(StringRefA === StringRefB);             //輸出為true
    }
    {
        console.log( "0" == "" );                           //輸出為false
        console.log( 0 == "" );                             //輸出為true
        console.log( 0 == "0" );                            //輸出為true
        console.log( false == "false" );                    //輸出為false
        console.log( false == "0" );	                    //輸出為true
        console.log( false == undefined );                  //輸出為false
        console.log( false == null );                       //輸出為false
        console.log( null == undefined );                   //輸出為true
        console.log( " \t\r\n" == 0 );                      //輸出為true
    }
}

{ // Chapter 2.4.5 字串運算符﹝String Operators﹞
    console.log( "10" + 20 );                   //輸出1020
    console.log(10 + new Array(20,"30"));       //輸出1020,30

    console.log( "10" + 20 + 30);               //輸出102030
    console.log(10 + 20 + "30");                //輸出3030
}

{ // Chapter 2.4.6 賦值運算符﹝Assignment Operators﹞ 
    var string = "a1234";
    var StringRefA, StringRefB, StringRefC;
    StringRefA = StringRefB = StringRefC = string;
    console.log(StringRefC);                        //a1234
}

{ // Chapter 2.4.7 函數運算符﹝function Operators﹞
    var funcA = function() { console.log(10 + 20)};
    var funcB = new Function('console.log(10 + 20)');
    funcA();   	//輸出為30
    funcB();   	//輸出為30
}

{ // Chapter 2.4.9 流程控制 - If…else條件陳述式
    var day = new Date().getDay();

    if (day == 6) {
        console.log('今天星期六所以有放假.');
    } else if (day == 0) {
        console.log('今天星期天所以有放假.');
    } else {
        console.log('今天是平日所以沒放假.');
    };
}

{ // Chapter 2.4.9 流程控制 - If…else條件陳述式
    var day = new Date().getDay();

    if (day == 6) {
        console.log('今天星期六所以有放假.');
    } else if (day != 6) {
        console.log('今天不是星期六.');
    } else if (day == 0) {
        console.log('今天星期天所以有放假.');
    } else {
        console.log('今天是平日所以沒放假.');
    };
}

{ // Chapter 2.4.9 流程控制 - If…else條件陳述式
    var day = new Date().getDay();
    if (day == 6) {
            console.log('今天星期六所以有放假.');
            if (day != 0) {
                    console.log('而且也肯定今天不是星期天.');
            }
    } else if (day == 0) {
            console.log('今天星期天所以有放假.');
    } else {
            console.log('今天是平日所以沒放假.');
    };
}

{ // Chapter 2.4.9 流程控制 - switch陳述式
    var day = new Date().getDay();
    switch (day){
            case 6:
                    console.log('今天星期六所以有放假.');
                    break;
            case 0:
                    console.log('今天星期天所以有放假.');
                    break;
            default :
                    console.log('今天是平日所以沒放假.');
    }
}

{ // Chapter 2.4.9 流程控制 - switch陳述式
    var day = new Date().getDay();
    switch (day){
            case 6:
                    console.log('今天星期六所以有放假.');
            case 0:
                    console.log('今天星期天所以有放假.');
            default :
                    console.log('今天是平日所以沒放假.');
    }
}

{ // Chapter 2.4.9 流程控制 - switch陳述式
    var day = new Date().getDay();
    switch (day){
            case 6:
            case 0:
                    console.log('今天是假日所以有放假.');
                    break;
            default :
                    console.log('今天是平日所以沒放假.');
    }
}

{ // Chapter 2.4.9 流程控制 - for迴圈陳述式
    for( var i = 0 ; i < 7 ; i++ ) {
            switch (i){
                    case 6:
                            console.log('星期六是假日.');
                            break;
                    case 0:
                            console.log('星期天是假日.');
                            break;
                    default :
                            console.log('平日不是假日.');
            }
    }
}

{ // Chapter 2.4.9 流程控制 - for…in迴圈陳述式
    var list = [
            { id: 1, score: '30' },
            { id: 2, score: '50' },
            { id: 3, score: '70' },
            { id: 4, score: '65' }
    ];          	
    for (var i in list) {
            var obj = list[i];
            console.log(obj.id+':'+obj.score);
    }
}

{ // Chapter 2.4.9 流程控制 - for…in迴圈陳述式
    var list = [ 1, 2, 3, 4 ];
    for (var i in list) {
            console.log(list[i]);
    }
}

{ // Chapter 2.4.9 流程控制 - while迴圈陳述式
    var day = new Date().getDay();
    var index = 0;
    while ( index <= 7 ){
            if ( index == day ) {
                    if ( index == 0 ) {
                            console.log('今天是星期天.');
                    } else {
                            console.log('今天是星期'+index+'.');
                            }
            }
            index++;
    }
}

{ // Chapter 2.4.9 流程控制 - do…while迴圈陳述式
    var day = new Date().getDay();
    var index = 0;
    do {
            if ( index == day ) {
                    if ( index == 0 ) {
                            console.log('今天是星期天.');
                    }
                    else
                            console.log('今天是星期'+index+'.');
            }
            index++;
    }while ( index <= 7 );
}

{ // Chapter 2.4.9 流程控制 - break陳述式
    var day = new Date().getDay();
    var index = 0;
    while ( index <= 7 ){
            console.log('執行次數:'+index+'.');
            if ( index == day ) {
                    if ( index == 0 ) {
                            console.log('今天是星期天.');
                            break;
                    }
                    else{
                            console.log('今天是星期'+index+'.');
                            break;
                    }
            }
            index++;
    }
}

{ // Chapter 2.4.9 流程控制 - continue陳述式
    var list = [
            { id: 1, score: '30' },
            { id: 2, score: '50' },
            { id: 3, score: '70' },
            { id: 4, score: '65' }
    ];          	
    for (var i in list) {
            var obj = list[i];
            if ( obj.score >= 60 ) {
                    continue;
            }

            console.log('不及格的學號['+obj.id+']:'+obj.score);
    }
}

{ // Chapter 2.4.9 流程控制 - with陳述式
    var list = [
            { id: 1, score: '30' },
            { id: 2, score: '50' },
            { id: 3, score: '70' },
            { id: 4, score: '65' }
    ];

    for (var i in list) {
            var obj = list[i];
            with (obj) {
                    if ( score >= 60 ) {
                            continue;
                    }

                    console.log('不及格的學號['+id+']:'+score);
            }
    }
}

{ // Chapter 2.5 函數 - 函數定義及呼叫
    // 範例1: 宣告一個函數名稱然後再呼叫。
    function fnprint(val) {
        console.log('The value is: '+val);
    }
    fnprint('ok');
     
    // 範例2: 宣告變數來使用Function類別，然後透過這變數來呼叫。
    var fnprint = new Function('val','console.log(\'The value is: \'+val);');
    fnprint('ok');
     
    // 範例3: 宣告變數來定義一個匿名函數，再透過這變數呼叫匿名函數。
    var fnprint = function(val) {
        console.log('The value is: '+val);
    }
    fnprint('ok');
     
    // 範例4: 直接定義一個匿名函數，然後直接執行它。
    (function(val) {
        console.log('The value is: '+val);
    })('ok');
     
    // 範例5: 根據JavaScript的圓括弧運算符優先權，下面範例會從最裡面的圓括弧直接強制執行匿名函數。
    (function(val) {
        console.log('The value is: '+val);
    }('ok'));
     
    // 範例6: 透過void關鍵字直接執行緊跟著的匿名函數。
    void function(val) {
        console.log('The value is: '+val);
    }('ok');
}

{ // Chapter 2.5 函數 - 閉包(Closure)
    var x = 50;

    function closureFunc() {
        var x = 100;

        return x;
    }

    console.log(x);
    console.log(closureFunc());
}

{ // Chapter 2.5 函數 - 閉包(Closure)
    function BMI(name) {

        var BMIResult = 0;
        function count_BMI(weight, height) {	
     
            var mass = parseInt(weight);
            var counter = parseInt(height) / 100;
            BMIResult = mass / (counter * counter);

            console.log(name + ', your BMI is '+BMIResult + '.');

            return BMIResult;
        }

        return count_BMI;
    }

    // 建立閉包函數
    var Wesley_BMI = BMI("Wesley");
    var Fred_BMI = BMI("Fred");

    // 使用閉包函數
    Wesley_BMI(75, 175);
    Fred_BMI(66, 180);
}

{ // Chapter 2.6.1 事件機制
    console.log('Start');

    setTimeout(function() {
        console.log('Trigger');
    }, 1000);

    console.log('End');
}

{ // Chapter 2.6.1 事件機制
    console.log('Start');

    setTimeout(function() {
        console.log('Trigger');
    }, 0);

    console.log('End');
}

{ // Chapter 2.7 原型 (Prototype)
    // 定義一個可被參考的原型物件 MyObject
    var MyObject = function() {
        // 定義成員
        this.count = 0;
    };

    // 定義方法
    MyObject.prototype.touch = function() {
        // 本物件的count屬性加一
        this.count++;
    }

    // 參考 MyObject 原型定義去建立一個新的物件
    var myObj = new MyObject();

    // 呼叫三次我們定義的方法
    myObj.touch();
    myObj.touch();
    myObj.touch();

    // 存取我們定義的物件成員
    console.log(myObj.count);
}

{ // Chapter 2.8.2 變數和物件的記憶體使用
    var container = new String('This is string');
    console.log('Length is ' + container.length);
}

{ // Chapter 2.8.2 變數和物件的記憶體使用
    var container = new String('This is string');
    container = new Array();
    container = {};

    var container_new = container;    // container_new 會關聯到 {}
}





















