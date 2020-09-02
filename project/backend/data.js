
console.log("data.js 페이지");

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'emfjrkwk',
  port     : 3306,
  database : 'DB_OAG'
});

connection.connect();

connection.query('SELECT * from tbl_member', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.', err);
});

connection.end();