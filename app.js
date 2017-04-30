var express = require('express');
var app = express();

const INDEX_PATH = '/dist/index.html';

app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 3000 );

app.get('/', function(req, res){
  res.sendFile(__dirname + INDEX_PATH);
});
app.get('/articles', function(req, res){
  res.sendFile(__dirname + INDEX_PATH);
});
app.get('/article', function(req, res){
  res.sendFile(__dirname + INDEX_PATH);
});
app.get('/cv', function(req, res){
  res.sendFile(__dirname + INDEX_PATH);
});
