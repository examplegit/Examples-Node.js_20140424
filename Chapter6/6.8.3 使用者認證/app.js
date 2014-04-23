var express = require('express');
var app = express();

app.configure(function() {
    // 啟用cookie解析器
    app.use(express.cookieParser());

    // 啟用cookieSession
    app.use(express.cookieSession({
        key: 'node',
        secret: "HelloExpressSESSION"
    }));

    // 啟用 body 解析器
    app.use(express.bodyParser());
    
    // 啟用路由機制
    app.use(app.router);
});

app.get('/login_page', function(req, res) {
    // 檢查是否已經登入
    if (req.session.logined) {
        // 已經登入
        res.send('<a href=\"/logout\">立即登出</a>');
        res.end();
        return;
    }

    // 因為尚未登入，顯示登入表單
    res.send('<form action=\"/login\" method=\"POST\"><input type=\"text\" name=\"username\"><br/><input type=\"password\" name=\"password\"><br/><input type=\"submit\" value=\"登入\"></form>');
    /*
    res.send('<form action=\"/login\" method=\"POST\">');
    res.send('<input type=\"text\" name=\"username\">');
    res.send('<br/>');
    res.send('<input type=\"password\" name=\"password\">');
    res.send('<br/>');
    res.send('<input type=\"submit\" value=\"登入\">');
    res.send('</form>');
    */
    res.end();
});

app.post('/login', function(req, res) {
    // 檢查帳號和密碼
    if (req.body.username != 'user' ||
        req.body.password != '12345678') {

        // 帳號或密碼錯誤時顯示訊息
        res.send('帳號或密碼錯誤，請重新登入。');
        res.end();
        return;
    }

    // 認證通過，將 Session 的 logined 標記為已登入
    req.session.logined = true;

    // 重新導向回 login_page 頁面
    res.redirect('/login_page');
    res.end();
});

app.get('/logout', function(req, res) {

    //將 Session 的 logined 標記為未登入
    req.session.logined = false;

    // 重新導向回 login_page 頁面
    res.redirect('/login_page');
    res.end();
});

app.listen(12345);

