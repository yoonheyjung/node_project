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

/* 공지사항 리스트불러오기  */
router.get('/notice', function(req, res, next) {
  connection.query('SELECT board.*,mem.name FROM tbl_board AS board left join tbl_member AS mem on mem.idx = board.writer where mode ="ntc" order by reg_date DESC', function (err, rows) {
    if (err) throw err;
    res.json(rows);
    //console.log(rows);
  });
});

/* qna 리스트 불러오기  */
router.get('/qna', function(req, res, next) {
    connection.query('SELECT board.*,mem.name FROM tbl_board AS board left join tbl_member AS mem on mem.idx = board.writer where mode ="qna" order by reg_date DESC', function (err, rows) {
        if (err) throw err;
        res.send(rows);
        //console.log(rows);
    });
});

/* 상세 글 불러오기  */
router.post('/detail', function(req, res, next) {
  console.log(req.body.seq);
  connection.query('SELECT board.*,mem.name FROM tbl_board AS board left join tbl_member AS mem on mem.idx = board.writer where seq ='+req.body.seq+' order by reg_date DESC', function (err, rows) {
      if (err) throw err;
      //res.send(rows);
      //console.log(rows);
      res.json({
        success: true,
        data : rows
      })
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
  connection.query('INSERT INTO tbl_board (mode,subject,note,writer) VALUES ("' + board.mode + '","' + board.title + '","' + board.text + '","1")', board, function (err, row2) {
    if (err) throw err;
  });
  res.json({
    success: true,
    message: 'Save Success!'
  })
});

/* 글 수정 */
router.post('/update', function(req, res){

});

/* 글 삭제 */
router.post('/delete', function(req, res){

});
module.exports = router;
