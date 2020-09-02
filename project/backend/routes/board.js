var express = require('express');
var router = express.Router();
var mysql = require('mysql');

console.log("board.js 들어옴");
/* DB 정보 */
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'emfjrkwk',
  port     : 3306,
  database : 'DB_OAG'
});
connection.connect();

/* 공지사항 불러오기  */
router.get('/notice', function(req, res, next) {
  connection.query('SELECT * FROM tbl_board where mode ="notice"', function (err, rows) {
    if (err) throw err;
    res.json(rows);
    console.log(rows);
  });
});
/* qna 불러오기  */
router.get('/qna', function(req, res, next) {
    connection.query('SELECT * FROM tbl_board where mode ="qna"', function (err, rows) {
        if (err) throw err;
        res.send(rows);
        console.log(rows);
    });
});

module.exports = router;
