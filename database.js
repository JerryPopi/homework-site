const express = require("express");
const path = require("path");
const mysql = require("mysql");
const app = express();

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

// con.connect(function (err){
//     if(err) throw err;

//         if (err) throw err;
//         console.log(result);
//     })
// })
