var express = require('express');
var router = express.Router();
var mysql = require('mysql');

console.log("users.js 들어옴");

/* DB 정보 */
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'emfjrkwk',
  database : 'DB_OAG',
  port    :'3306'
});

connection.connect();

connection.query('SELECT * from tbl_member', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM tbl_member', function (err, rows) {
    if (err) throw err;
    res.send(rows);
    console.log(rows);
  });
});

//로그인 처리 알고리즘
router.post('/login', function(req, res){
  /* 변수 선언 */
  var auth = {
    "id": req.body.user.userid,
    "pw": req.body.user.userpw
  } //양식을 임시 저장할 객체
  var sql = 'SELECT * FROM tbl_member'; //Mysql 쿼리 양식

  /* 알고리즘 */

  //디버깅용 로그
  console.log(auth);

  //DB에서 회원정보 읽어와서 사용자가 입력한 내용과 대조
  connection.query(sql, function(err, rows){
     if(err){
      console.log(err);
    }
    else {
      for(var i=0; i<rows.length; i++){
        if(rows[i].id == auth.id && rows[i].pw == auth.pw){
          //세션 생성
          req.session.user = {
            "id" : rows[i].id,
            "nick" : rows[i].nick,
            "name" : rows[i].name
          }
          console.log('로그인 처리 - 세션 저장');
          res.json({
            success: 1,
            message: '로그인 되었습니다!'
          })
          return;
        }
      }
      //일치하는 id,pw가 없음
      res.json({
        success: 0,
        message: 'ID와 PW를 다시 확인하여 주십시오!'
      })
     }
  });
});

module.exports = router;
