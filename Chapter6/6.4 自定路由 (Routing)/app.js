var express = require('express');

// å»ºç?ä¸?? Express ä¼ºæ???
var app = express();

// è¨­å??œæ?æª”æ???œ¨?®é?
app.use(express.static(__dirname + '/public'));

// GET?¹æ??„è·¯?±ï??¨ä??•ç???myroute?è·¯å¾?
app.get('/myroute', function(req, res) {
    // ?³é?å­—ä¸²?ç?è¦½å™¨
    res.send('This is GET method');
    res.end();
});

// POST?¹æ??„è·¯?±ï??¨ä??•ç????è·¯å¾?
app.post('/myroute', function(req, res) {
    // ?³é?å­—ä¸²?ç?è¦½å™¨
    res.send('This is POST method');
    res.end();
});

app.listen(12345);

