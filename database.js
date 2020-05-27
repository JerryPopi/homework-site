const express = require("express");
const path = require("path");
const mysql = require("mysql");
const app = express();
const reg = require("./register.js");
//const trie = require("trie-search");


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

exports.usernameVerificator = function (username){
  con.query("SELECT username FROM users WHERE username='"+username+"'", function (err, result, fields) {
    if (err) throw err;
    console.log(result.length);
    console.log(fields);
    if(result.length>0){
      console.log('shiot')
    }else{
       
       console.log("not null")
      reg.addTodb();
    }

    
  })
}
