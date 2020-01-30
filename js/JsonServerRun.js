// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("D:\\JsonServer\\db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(18088, () => {
  console.log("http://localhost:18088");
});
