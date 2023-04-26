var express = require ('express');
var app = express();

app.use(express.static('source'));

app.listen(8080, function() {
    console.log("✨Listening at 8080✨");
})