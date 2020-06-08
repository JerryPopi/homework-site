const express = require("express");
const path = require("path");
const mysql = require("mysql");
const app = express();
const reg = require("./register.js");
const client = require("./public/client.js");
const bcrypt = require("bcrypt");
const login = require("./login.js");
const saltRounds = 10


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

exports.usernameVerificator = function (username, passhash){
  con.query("SELECT username FROM users WHERE username='"+username+"'", function (err, result, fields) {
    if (err) throw err;

    if(result.length>0){
      console.log('username in use');
      client.statusResponse(1);
    }else{
      console.log("not present");
      //client.statusResponse(0);
      reg.addTodb(username, passhash);
    }
  })
}

exports.loginVerification = function (user, password) {
  let loginAllow = false;
  let usernameEx = false;
  let passwordEx = false;
    con.query("SELECT * FROM users WHERE username = '"+user+"'", function (err, result, fields){
    	if (err) throw err;
		bcrypt.compare(password, result[0].userpass, function (err, res){
		//console.log(result);
			// if(res){
			// 	passwordEx = true;
			// }else{
			// 	passwordEx = false;
			// }
			// if(result[0].username == user){
			// 	usernameEx = true;
			// }else{
			// 	usernameEx = false;
			// }
			// if(usernameEx && passwordEx){
			// 	loginAllow = true;
			// }

			if(res && result[0].username){
				loginAllow = true;
				console.log('reeeee')
			}
			if(loginAllow) loginAllow = true;
			console.log(loginAllow)
		})
		//console.log(loginAllow)
	})
//console.log(loginAllow)
return true;
}
