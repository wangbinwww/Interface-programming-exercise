var express = require("express");
var app = express();
var port = 3000;

app.get("/", (req, res) => {
    var responseObject = {
        "name": "hello word",
        "password": "12345567"
    }
    res.send(responseObject)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
