//npm install mqtt --save
var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://127.0.0.1");

client.on('connect', function () {
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', '{"Name":"1","Age":"39"}')
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log("Pub to server ：" + message.toString())
  //client.end()
})