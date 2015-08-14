var express = require('express');
var router = express.Router();

/* 使用者刪除文章功能. */
router.get('/delete/:id', function(req, res, next) {
  res.send("This is the delete function.");
});

/* 使用者登入會員功能. */
router.post('/login', function(req, res, next) {
  res.send("This is the login function.");
});

/* 使用者新增文章功能. */
router.post('/add', function(req, res, next) {
  res.send("This is the add function.");
});

/* 使用者更新文章功能. */
router.post('/update/:id', function(req, res, next) {
  res.send("This is the update function.");
});

/* 文章留言功能. */
router.post('/comment/:id', function(req, res, next) {
  res.send("This is the comment function.");
});

module.exports = router;
