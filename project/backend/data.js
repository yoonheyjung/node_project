console.log("heoolllllll");

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'tesr',
  password : 'qwer1234!',
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