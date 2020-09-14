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
  connection.query('SELECT * FROM tbl_board where mode ="ntc"', function (err, rows) {
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
/* 글 저장 */
router.post('/save', function(req, res){
   /* 변수 선언 */
   var board = {
    "mode": req.body.form.mode, //qns or notice
    "title": req.body.form.title,
    "text": req.body.form.text
  } 
});

/* 글 삭제 */
router.post('/delete', function(req, res){

});
module.exports = router;
