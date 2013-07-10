var fs = require('fs');
var infile = "index.html";
var Content= String(fs.readFileSync(infile,'utf8'));

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(Content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
