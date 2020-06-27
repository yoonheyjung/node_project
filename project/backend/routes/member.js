/*show-all-data.js*/
console.log("/routes/member.js");
var express = require('express');
var router = express.Router();

const mysql      = require('mysql');
const dbconfig   = require('../config/database.js');
const connection = mysql.createConnection(dbconfig);

connection.connect((err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log( 'mysql connect completed' );
});

router.get('/member', function (req, res, next) {
    const sql = 'SELECT * FROM tbl_member';
    connection.query(sql, function (err, rows, fields) {
            console.log(rows);
        
        connection.end();
    });
});

module.exports = router;