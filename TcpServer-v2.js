/* 引入net模块 */
var net = require("net");
const log4js = require('log4js');
var num = 0;

log4js.configure({
    appenders: {
        everything: {
            type: 'dateFile',
            filename: 'logs',
            //pattern: 'yyyy-MM-dd hh-mm.log'
            pattern: 'yyyy-MM-dd.log'
        }
    },
    categories: {
        default: {
            appenders: ['everything'],
            level: 'debug'
        }
    }
});
const logger = log4js.getLogger('everything');
/* 创建TCP服务器 */
var server = net.createServer(function (socket) {
    server.getConnections(function (err, count) {
        console.log("客户机上线 ON Line!");
        console.log("服务器连接数量是： " + count);
    });
    /* 监听data事件 */
    socket.on("data", function (data) {
        logger.debug(data);
        //console.log(num++ + " Recv:" + data.toString());
        var message = "Send: Server to Client  " + num++;
        /* 发送数据 */
        socket.write(message, function () {
            logger.debug(message);
        });
    });
    socket.on("end", function () {
        console.log("end事件--客户机下线 OFF Line！ ");
    });
    socket.on("close", function () {
        console.log("close事件--客户机下线 OFF Line！ ");
    });
    socket.on("error", function (err) {
        console.log("error事件--错误信息： " + err);
    });

});

/* 设置连接的服务器 */
server.listen(5001, function () {
    console.log("创建本机TCP Server 监听端口5001!");
});
/* 允许的最大连接数量*/
server.maxConnections = 1;