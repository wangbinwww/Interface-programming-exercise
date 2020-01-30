// file: server.js
var log4js = require('log4js');
var express = require('express');
var port = 3000;
var app = express();


log4js.configure({
    appenders: {
        cheese: {
            type: 'file',
            encoding: "utf-8",
            filename: 'Error.log'
        }
    },
    categories: {
        default: {
            appenders: ['cheese'],
            level: 'all'
        }
    }
});

const logger = log4js.getLogger('cheese');
app.get('/:id', function (req, res) {
    var reqmessage = req.params.id;
    res.send('前端外刊评论' + req.params.id);
    logger.error(reqmessage);
});

app.listen(port);

console.log("Example app listening on port " + port + "!");