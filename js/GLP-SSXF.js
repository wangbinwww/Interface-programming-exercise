/*程序用途：
    SSXF:三山消防；
    适用于三山消防系统用传装置数据解析
*/
/* 引入net模块 */
var net = require("net");
const log4js = require("log4js");
var num = 0;
log4js.configure({
  appenders: {
    everything: {
      type: "dateFile",
      filename: ".\\logs\\log",
      //pattern: 'yyyy-MM-dd hh-mm.log'
      pattern: "yyyy-MM-dd hh.log"
    }
  },
  categories: {
    default: {
      appenders: ["everything"],
      level: "debug"
    }
  }
});
const logger = log4js.getLogger("everything");
/* 创建TCP服务器 */
var server = net.createServer(function (socket) {
  server.getConnections(function (err, count) {
    console.log("客户机上线 ON Line!");
    console.log("客户端在线数量是： " + count);
  });
  /* 监听data事件 */
  socket.on("data", function (RecvData) {
    logger.debug(RecvData);
    // sum校验
    var sumcrc = portIsOccupied(RecvData);
    //console.log(num++ + " Recv:" + data.toString());
    if (sumcrc == true) {
      var message = "Send: CRC err = " + sumcrc;
      /* 发送数据 */
      socket.write(message, function () {
        logger.debug(message);
      });
    } else {
      var message = "Send: CRC err = " + sumcrc;
      /* 发送数据 */
      socket.write(message, function () {
        logger.debug(message);
      });
    }
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

function portIsOccupied(RecvData) {
  //计算得到的sum用于校验
  let calsum = 0;
  //接收buf
  let buf = Buffer.from(RecvData);
  //接收报文中的累加和校验值
  let recvsum = buf[buf.length - 3].toString(16);
  //console.log(buf);
  // console.log(buf.toString('hex'));
  for (var i = 2; i < 35; i++) {
    calsum = calsum + buf[i];
  }
  calsum = calsum & 255;
  //console.log(sum.toString(16));
  //验证输出
  //console.log(calsum.toString(16));
  //console.log(recvsum.toString(16));
  if (calsum.toString(16) == recvsum.toString(16)) {
    return true
  } else {
    return false;
  }
}