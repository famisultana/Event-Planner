var http = require('http');
var sql = require('sql');


var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database:"user"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


  get("/product",feth,]]])

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("hello world ")
    res.end();
  }).listen(3000);