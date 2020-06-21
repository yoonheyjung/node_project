var express = require('express');
var router = express.Router();
var testdata = require('../data.js');
router.get('/', function (req, res, next) {
  res.send(testdata)
});
// 영화 상세 페이지를 위한 코드
router.get('/:id', function (req, res, next) {
    var id = parseInt(req.params.id, 10)
    var movie = testdata.filter(function (movie) {
    return movie.id === id
  });
  res.send(movie)
});
module.exports = router;

/*var express = require('express');
var router = express.Router();

// GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

//////////////////////////////////////////

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
*/