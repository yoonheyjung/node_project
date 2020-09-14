var express = require('express');
var router = express.Router();
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'emfjrkwk',
  database : 'DB_OAG',
  port    :'3306'
});

console.log("idex.js 들어옴");
connection.connect();

module.exports = router;
//connection.end();