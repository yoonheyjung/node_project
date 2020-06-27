console.log('routes/index.js');
  
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
/*
const express    = require('express');
const mysql      = require('mysql');
const dbconfig   = require('../config/database.js');
const connection = mysql.createConnection(dbconfig);

const app = express();

// configuration =========================
app.set('port', process.env.PORT || 3000);

// GET method route
app.get('/', (req, res) => {
  res.send('Root');
  console.log('app get을 탄다');
});
// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
  console.log('app posrt 탄다');
});

app.get('/users', (req, res) => {
  connection.query('SELECT * from tbl_member', (error, rows) => {
    if (error) throw error;
    console.log('User info is: ', rows);
    console.log('indexfm를 탄다');
    res.send(rows);
  });
});

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});
*/
/*
connection.end();
*/
/*
d여기까지는 성공
console.log("index.js 페이지");

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
*/
/*var express = require('express');
var router = express.Router();

// GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

//////////////////////////////////////////

console.log("heoollllsslll");

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