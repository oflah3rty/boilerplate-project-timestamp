var express = require('express');
var app = express();

app.get('/api/timestamp/:date_string?', function(req,res) {
  let time = new Date(req.params.date_string); 
  res.json({"unix": time.getTime(), "utc": time.toUTCString()});
});
