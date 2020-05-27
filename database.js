const express = require("express");
const path = require("path");
const mysql = require("mysql");
const app = express();
const reg = require("./register.js");

con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rikoshet123321",
  port: 3306,
  database: "homeworksite",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports.sqlinsert = function (username, passhash) {
  let sql =
    "INSERT INTO users (username, userpass) VALUES ('" +
    username +
    "', '" +
    passhash +
    "')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
};
con.query("SELECT userpass FROM users", function (err, result, fields) {
  if (err) throw err;
  console.log(result[0].userpass);
});

exports.usernameVerificator = function (username){
  con.query("SELECT username FROM users", function (err, result, fields) {
    if (err) throw err;
    console.log(result.length);
    for(let i=0;i<result.length;i++){
      if(username === result[i].username){
        console.log("returned false");
          return false;
      }else{
        console.log('returned true');
        reg.addTodb()
        break;
      }
    }

    
  })
}
