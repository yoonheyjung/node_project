var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var multer = require('multer');
var upload = multer({ dest: "uploads/"});

console.log("collection.js 들어옴");

/* DB 정보 */
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'emfjrkwk',
  database : 'DB_OAG',
  port    :'3306'
});

connection.connect();


/* 컬렉션 리스트불러오기  */
router.get('/list', function(req, res, next) {
    connection.query('SELECT * FROM tbl_art ', function (err, rows) {
        if (err) throw err;
        res.send(rows);
        //console.log(rows);
    });
});

/* 세부사항 리스트불러오기  */
router.post('/detail', function(req, res, next) {
    connection.query('SELECT * FROM tbl_art where idx ='+req.body.idx+'', function (err, rows) {
      if (err) throw err;
      res.json({
        success: true,
        data : rows
      })
    });
});

/* 예약하기 */
router.post('/reservation', function(req, res, next) {
   /* 변수 선언 */
   var auth = {
        "art_idx": req.body.form.art_idx,
        "date": req.body.form.date, //qns or notice
        "time": req.body.form.time
    } 

    connection.query('INSERT INTO tbl_reservation (art_idx,date,time) VALUES ("' + auth.art_idx + '","' + auth.date + '","' + auth.time + '")', auth, function (err, row2) {
        if (err) throw err;
      });
      res.json({
        success: true,
        message: '예약이 완료되었습니다!'
      })
});

/* 디자인 저장 */
router.post('/save', function(req, res){
    /* 변수 선언 */
    var auth = {
        "subject": req.body.form.subject, 
        "note": req.body.form.note,
        "time": req.body.form.time,
        "price": req.body.form.price
    } 
    connection.query('INSERT INTO tbl_art (subject,note,time,price) VALUES ("' + auth.subject + '","' + auth.note + '","' + auth.time + '","' + auth.price + '")', auth, function (err, row2) {
        if (err) throw err;
    });
    res.json({
        success: true,
        message: 'Save Success!'
    })
 });

router.get('/', function (req, res, next) {
    res.render('uploads', { title: "파일 업로드" });
});
router.post('/', upload.single('user_file'), function(req, res, next){
    
});

module.exports = router;
