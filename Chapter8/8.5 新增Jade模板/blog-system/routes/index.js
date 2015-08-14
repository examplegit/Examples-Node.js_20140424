var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.locals.username = req.session.name ;
    res.locals.authenticated = req.session.logined;
    res.render( 'index', {title : 'Blog System'});
});

module.exports = router;
