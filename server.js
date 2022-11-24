const express = require('express')
const app = express()
const path = require('path')

/*
const mysql = require('mysql')
const conn = {
    host : '127.0.0.1',
    port : '3306', 
    user :  'forCommentDB',
    password : '1234', 
    database : 'comments_db'
}

let connection = mysql.createConnection(conn);
connection.connect();


let sql = "INSERT INTO 'members' ('username','password') VALUES('test','test');";

connection.query(sql, function(err,results, fields){
    if(err){
        console.log(err);
    }
    console.log(results);
})
*/

app.use(express.static(path.join(__dirname, 'react-project/build')));

app.get('/', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/react-project/build/index.html'));
});

app.listen(3000, function(){
	console.log('listening on 3000')
})