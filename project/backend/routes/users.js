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
  var user = {
    "id": req.body.user.userid,
    "pwd": req.body.user.userpwd
  } //양식을 임시 저장할 객체

  var sql = 'SELECT * FROM tbl_member'; //Mysql 쿼리 양식

  /* 알고리즘 */

  //디버깅용 로그
  console.log(user);

  //DB에서 회원정보 읽어와서 사용자가 입력한 내용과 대조
  connection.query('SELECT id, pwd, name FROM tbl_member WHERE id = "' + user.id + '"', function (err, row) {
    console.log(err);
    console.log(row);
    if (err == null || row == null || err) {
      res.json({ // 매칭되는 아이디 없을 경우
        success: false,
        message: '아이디 혹은 비밀번호를 다시 확인해주세요'
      })
    }
    if (row[0] !== undefined && row[0].id === user.id) {
      //bcrypt.compare(user.pwd, row[0].pwd, function (err, res2) {
        if (row[0].pwd === user.pwd) {
          res.json({ // 로그인 성공 
            success: true,
            message: '환영합니다. '+ row[0].name +'님!'
          })
        }
        else {
          res.json({ // 매칭되는 아이디는 있으나, 비밀번호가 틀린 경우            
            success: false,
            message: '아이디 혹은 비밀번호를 다시 확인해주세요'
          })
        }
      //})
    }
  })
});


//회원가입 
router.post('/signUp', function(req, res){
  /* 변수 선언 */
  var user = {
    "name": req.body.form.name,
    "id": req.body.form.id,
    "pwd": req.body.form.pwd,
    "email": req.body.form.email,
    "gender": req.body.form.selected,
    "birth": req.body.form.birth,
    "type": req.body.form.staff
  } //양식을 임시 저장할 객체

  connection.query('SELECT id FROM tbl_member WHERE id = "' + user.id + '"', function (err, row) {
    if (row[0] == undefined){ //  동일한 아이디가 없을경우,
      //const salt = bcrypt.genSaltSync();
      //const encryptedPassword = bcrypt.hashSync(user.password, salt);
      connection.query('INSERT INTO tbl_member (id,pwd,name,gender,birth,mail,type,shop) VALUES ("' + user.id + '","' + user.pwd + '","' + user.name + '","' + user.gender + '","' + user.birth + '","' + user.email + '","' + user.type + '","' + user.shop + '")', user, function (err, row2) {
        if (err) throw err;
      });
      res.json({
        success: true,
        message: 'Sing Up Success!'
      })
    }
    else {
      res.json({
        success: false,
        message: 'Sign Up Failed Please use anoter ID'
      })
    }
  });


});
module.exports = router;
