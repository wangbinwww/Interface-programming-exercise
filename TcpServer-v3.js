/* 引入net模块 */
var net = require("net");

/* 创建TCP服务器 */
var server = net.createServer(function(socket) {
  console.log("有客户端接入!");
  server.maxConnections = 3;
  server.getConnections(function(err, count) {
    console.log("服务器连接数量是： " + count);
  });
  /* 获取地址信息 */
  //var address = server.address();
  //var message = "S to C：" + JSON.stringify(address);
  var message = "Server to Client";
  /* 发送数据 */
  socket.write(message, function() {
    var writeSize = socket.bytesWritten;
    console.log(message);
    console.log("服务器至客户端--发送消息宽度：" + writeSize);
  });
  /* 监听data事件 */
  socket.on("data", function(data) {
    console.log(data);
    console.log(data.toString());

    var readSize = socket.bytesRead;
    var buffSize = data.byteLength;
    console.log("累计接收字节：" + readSize);
    console.log("本帧字节：" + buffSize);
  });
});
/* 设置最大连接数量 */

/* 设置连接的服务器 */
server.listen(5001);

/* 设置监听时的回调函数 */
server.on("listening", function() {
  console.log("创建本机TCP Server 监听端口5001!");
});
/* 设置关闭时的回调函数 */
server.on("close", function() {
  console.log("服务器关闭！");
});
/* 设置错误时的回调函数 */
server.on("error", function(err) {
  console.log("错误！" + err);
});

var address = server.address();
/* TCP服务器监听的端口号 */
console.log("服务器监听端口是：" + address.port);
/* TCP服务器监听的地址 */
console.log("本机地址是：" + address.address);
/* 说明TCP服务器监听的地址是 IPv6 还是 IPv4 */
console.log("地址类型是：" + address.family);
