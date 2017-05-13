var express = require('express');
var app = express();

app.use(express.static(__dirname + "/app"));
app.listen(process.env.PORT || 8000);
console.log("Server up on port 8000");

