var express = require('express');
var router = express.Router();

/* 使用者註冊頁面. */
router.get('/register', function(req, res, next) {
  res.send("This is the register page.");
});

/* 使用者登入頁面. */
router.get('/signin', function(req, res, next) {
  res.send("This is the signin page.");
});

/* 使用者登出頁面. */
router.get('/signout', function(req, res, next) {
  res.send("This is the signout page.");
});

/* 忘記密碼頁面. */
router.get('/forget', function(req, res, next) {
  res.send("This is the forget page.");
});

/* 使用者管理頁面. */
router.get('/profile', function(req, res, next) {
  res.send("This is the profile page.");
});

/* 新增文章頁面. */
router.get('/add_article', function(req, res, next) {
  res.send("This is the add_article page.");
});

/* 修改文章頁面. */
router.get('/modify/:id', function(req, res, next) {
  res.send("This is the modify page.");
});

/* 訪客留言頁面. */
router.get('/message/:id', function(req, res, next) {
  res.send("This is the message page.");
});

module.exports = router;
