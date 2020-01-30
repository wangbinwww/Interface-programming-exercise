/* 引入net模块 */
var net = require("net");
var num = 0;

/* 创建TCP服务器 */
var server = net.createServer(function (socket) {
    console.log("有客户端接入!");
    server.maxConnections = 3;
    server.getConnections(function (err, count) {
        console.log("服务器连接数量是： " + count);
    });
    /* 监听data事件 */
    socket.on("data", function (data) {
        console.log(data);
        //console.log(num++ + " Recv:" + data.toString());
        var message = "Send: Server to Client  " + num++;
        /* 发送数据 */
        socket.write(message, function () {
            console.log(message);
        });
    });
});

/* 设置连接的服务器 */
server.listen(5001);

/* 设置监听时的回调函数 */
server.on("listening", function () {
    console.log("创建本机TCP Server 监听端口5001!");
});