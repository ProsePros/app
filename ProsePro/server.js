var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var config = require('./webpack.config');
var axios = require('axios');

var app = express();

var compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler,{
  noInfo:true,
  publicPath:config.output.publicPath
}));

app.get('/css/bootstrap.min.css', function (req,res){
  res.sendFile(path.join(__dirname, 'build/css/bootstrap.min.css'));
});

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.on('.ready', function(){
  app.listen(3000, 'localhost', function (err){
    if (err) {
      return console.error(err)
    }
    console.log('Listening at port 3000');
  });
});


