// QoS 0：最多接收一次：发送数据包，仅此而已。
// QoS 1：至少接收一次：只要客户端未从服务器收到确认，就发送和存储数据包。 MQTT确保将其接收，但是可以重复。
// QoS 2：仅收到一次：与QoS 1相同，但没有重复项。 关于数据消耗，如果您担心的话，显然是QoS 2> QoS 1> QoS 0。

//cnpm install mosca --save
var mosca = require("mosca");

var ascoltatore = {
  //using ascoltatore
  //type: 'mongo',
  //url: 'mongodb://localhost:27017/mqtt',
  //pubsubCollection: 'ascoltatori',
  //mongo: {}
};

var settings = {
  port: 1888,
  backend: ascoltatore
};

var server = new mosca.Server(settings);

server.on("clientConnected", function(client) {
  console.log("client connected", client.id);
});

// fired when a message is received
server.on("published", function(packet, client) {
  console.log("Published", packet.payload);
});

server.on("ready", setup);

// fired when the mqtt server is ready
function setup() {
  console.log("MQTT Mosca server is up and running");
}
