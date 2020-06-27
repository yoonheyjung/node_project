console.log('/config/database.js');
// config/database.js
module.exports = {
    host     : 'localhost',
    user     : 'tesr',
    password : 'qwer1234!',
    port     : 3306,
    database : 'DB_OAG'
  };


/*const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
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
});*/
